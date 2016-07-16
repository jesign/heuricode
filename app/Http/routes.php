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
Route::get('/testCases/{id}', 'TestCaseController@getTestCases');
Route::get('/problem', 'ProblemController@getProblem');
Route::get('/problem/{id}', 'ProblemApiController@getProblem');

Route::get('/test', 'TestCaseController@testing');
Route::post('/getSubmissionId', 'ProblemApiController@getSubmissionId');
Route::get('/getSubmissionDetails/{id}', 'ProblemApiController@getSubmissionDetails');
Route::get('/Help', function(){
	return view('home');
});
