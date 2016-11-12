# Rest API using Laravel Passport 
This is initial structure for rest api having token authentication using laravel passport.
# Requirements
* PHP >= 5.6.4
* OpenSSL PHP Extension
* PDO PHP Extension
* Mbstring PHP Extension
* Tokenizer PHP Extension
* XML PHP Extension

## Setup/Configurations
* Clone this repo
* Adjust permissions
* Create Virtual host(optional)
* Adjust DB Settings in config/database.php
* cd to your project directory and run following commands


> * php artisan migrate
> * php artisan passport:install
> * php artisan passport:client --password
> * note down your client id and client secret

## Test and Verify
* Open application in browser i.e http://localhost/yourProjectDir/ or if you have created virtual host like api.dev then open http://api.dev
* Click on register and add new user to system
* Now test that client and api is working or not
* * You can use any rest api client but here we are using [postman](https://www.getpostman.com/). Just import [postman.json](https://github.com/jaffarhussain1011/laravel-rest-api-oauth2/edit/master/postman.json), click on left side to expand requsts and then click on token request . adjust request url,client_id,client_secret,username,password and press send button it should give status 200 with access and refresh tokens.
Note down your access token 
and then click on left side on user request and ajust your request url and access token in headers section and press send button it should return you logged in user detail.
