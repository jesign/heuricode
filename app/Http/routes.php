<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('home');
})->middleware('auth');
Route::get('#', function(){
	return view('home');
}); 

Route::auth();

Route::get('/home', 'HomeController@index');
Route::get('/problem', 'ProblemController@getProblem');
Route::get('/Help', function(){
	return view('home');
});
