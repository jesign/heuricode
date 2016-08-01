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

Route::get('#/home', function(){
	return view('home');
}); 

Route::auth();
Route::get('/checkAuth', 'UserController@checkAuth');
Route::get('/home', 'HomeController@index');
// rounds
Route::post('/round/add', 'RoundController@addRound');
Route::post('/round/set', 'RoundController@setRound');
// Problem
Route::get('/problem', 'ProblemController@getProblem');
Route::get('/problem/{id}', 'ProblemApiController@getProblem');
Route::get('/problem/sourceCode/C/{id}', 'ProblemController@getSourceCodeC');
Route::get('/problem/sourceCode/Cpp/{id}', 'ProblemController@getSourceCodeCpp');
Route::get('/problem/sourceCode/Java/{id}', 'ProblemController@getSourceCodeJava');
Route::post('/randomProblem', 'ProblemController@getRandomProblem');

// Submissions
Route::get('/getSubmissionDetails/{id}', 'ProblemApiController@getSubmissionDetails');
Route::post('/getSubmissionId', 'ProblemApiController@getSubmissionId');

// weaknesses rank
Route::get('rank/{id}', 'RankController@getRank');
Route::post('rank/up', 'RankController@rankUp');
Route::post('rank/down', 'RankController@rankDown');
// Help
Route::get('/help', function(){
	echo 'help';
})->middleware('auth');
