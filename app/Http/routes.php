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

// User
Route::auth();
Route::get('/checkAuth', 'UserController@checkAuth');
Route::post('/userId', 'UserController@getUserId');
Route::get('/home', 'HomeController@index');
Route::post('/findMatch', 'UserController@findMatch');
Route::post('/getPlayerDetails', 'UserController@getPlayerDetails');
Route::post('/checkIfMatch', 'UserController@checkIfMatch');
Route::post('/setWeakness', 'UserController@setWeakness');
Route::get('/hasWeakness', 'UserController@hasWeakness');

// rounds
Route::post('/round/add', 'RoundController@addRound');
Route::post('/round/set', 'RoundController@setRound');
Route::post('/saveError', 'RoundController@saveError');
Route::get('/getAllError/{mode}', 'RoundController@getAllError');

// Problem
Route::get('/problem', 'ProblemController@getProblem');
Route::get('/problem/{id}', 'ProblemApiController@getProblem');
Route::get('/problem/sourceCode/C/{id}', 'ProblemController@getSourceCodeC');
Route::get('/problem/sourceCode/Cpp/{id}', 'ProblemController@getSourceCodeCpp');
Route::get('/problem/sourceCode/Java/{id}', 'ProblemController@getSourceCodeJava');
Route::post('/problem/description', 'ProblemController@getProblemDescription');
Route::post('/randomProblem', 'ProblemController@getRandomProblem');
Route::post('/getPlayersProblem', 'ProblemController@getPlayersProblem');


// Submissions
Route::get('/getSubmissionDetails/{id}', 'ProblemApiController@getSubmissionDetails');
Route::post('/getSubmissionId', 'ProblemApiController@getSubmissionId');

// weaknesses rank
Route::get('ranks', 'RankController@getRanks');
Route::post('rank/up', 'RankController@rankUp');
Route::post('rank/down', 'RankController@rankDown');
// Help
Route::get('/help', function(){
	echo 'help';
})->middleware('auth');