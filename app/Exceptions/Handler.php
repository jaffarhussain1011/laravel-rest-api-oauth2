<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        \Illuminate\Auth\AuthenticationException::class,
        \Illuminate\Auth\Access\AuthorizationException::class,
        \Symfony\Component\HttpKernel\Exception\HttpException::class,
        \Illuminate\Database\Eloquent\ModelNotFoundException::class,
        \Illuminate\Session\TokenMismatchException::class,
        \Illuminate\Validation\ValidationException::class,
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        // return parent::render($request, $exception);
        $response = [
        'response'=>'fail',
        'errorMsg' => $exception->getMessage()?$exception->getMessage():'Bad Request',
        'statusCode'=>is_callable(array($exception, 'getStatusCode'))?$exception->getStatusCode():400
    ];

      // if ($exception instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
      //     $response['errorMsg']='Token Expired';
      // } else if ($exception instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
      //     $response['errorMsg']='Token Invalid';
      // }else
      if($exception instanceof \Illuminate\Http\Exception\HttpResponseException){
          $exceptionResponse = is_callable(array($exception, 'getResponse'))?$exception->getResponse():null;
          $exceptionData = is_callable(array($exceptionResponse, 'getData'))?$exceptionResponse->getData():null;
          if($exceptionData){
            $response['errorMsg']='Field Error(s)';
            $errors = [];
            foreach ($exceptionData as $field => $error) {
              $errors[] = ['field'=>$field,'errors'=>$error];
            }
            $response['fieldErrors'] = $errors;
            // $response['fieldErrors'] = $exceptionData;
            $response['statusCode'] = 200;
          }else{
            $exceptionContent = is_callable(array($exceptionResponse, 'getContent'))?$exceptionResponse->getContent():'Error';
            $response['errorMsg']=$exceptionContent;
          }

      }
      if(config('app.debug')){
        $response['debug'] = [
          'file' => is_callable(array($exception, 'getFile'))?($exception->getFile()):'',
          'line'=>is_callable(array($exception, 'getLine'))?($exception->getLine()):'',
          'trace'=>is_callable(array($exception, 'getTraceAsString'))?($exception->getTraceAsString()):'',
      ];
      }
      //this is api so send only json
      return response()->json($response, $response['statusCode']);
    }

    /**
     * Convert an authentication exception into an unauthenticated response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Illuminate\Auth\AuthenticationException  $exception
     * @return \Illuminate\Http\Response
     */
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => 'Unauthenticated.'], 401);
        }

        return redirect()->guest('login');
    }
}
