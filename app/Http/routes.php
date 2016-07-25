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

// Problem
Route::get('/problem', 'ProblemController@getProblem');
Route::get('/problem/{id}', 'ProblemApiController@getProblem');
Route::get('/problem/sourceCode/C/{id}', 'ProblemController@getSourceCodeC');
Route::get('/problem/sourceCode/Cpp/{id}', 'ProblemController@getSourceCodeCpp');
Route::get('/problem/sourceCode/Java/{id}', 'ProblemController@getSourceCodeJava');


// Submissions
Route::get('/getSubmissionDetails/{id}', 'ProblemApiController@getSubmissionDetails');
Route::post('/getSubmissionId', 'ProblemApiController@getSubmissionId');

// Help
Route::get('/Help', function(){
	return view('home');
});
// test
Route::get('/test', 'TestCaseController@testing');
