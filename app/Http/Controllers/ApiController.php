<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * return success response
     *
     * @return \Illuminate\Http\Response
     */
    public function success($error)
    {
        return response()->json(['response'=>'fail','error'=>$error], 200);
    }
    /**
     * return failed response
     *
     * @return \Illuminate\Http\Response
     */
    public function failure($data)
    {
        return response()->json(['response'=>'success','data'=>$data], 200);
    }
}
