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

Route::get('/contacts', function(){
	// $data = { 'name'=> 'jessie', 'age'=> 20};
	$data = "hellowwwwww";
	return view('welcome', [ 'data' => $data,]);
});
/* Testing */
Route::get('/test', 'UserController@test');
// User
Route::auth();
Route::get('/checkAuth', 'UserController@checkAuth');
Route::post('/userId', 'UserController@getUserId');
Route::get('/home', 'HomeController@index');
Route::post('/getPlayerDetails', 'UserController@getPlayerDetails');
Route::post('/setWeakness', 'UserController@setWeakness');
Route::get('/hasWeakness', 'UserController@hasWeakness');
Route::get('/getBattleRecords', 'UserController@getBattleRecords');
Route::get('/getBadges', 'UserController@getBadges');
Route::get('/getBadgeDetails/{id}', 'UserController@getBadgeDetails');
Route::post('/badges/add', 'UserController@addBadge');
// rounds
Route::post('/round/add', 'RoundController@addRound');
Route::post('/round/set', 'RoundController@setRound');
Route::post('/saveError', 'RoundController@saveError');
Route::get('/getAllError/{mode}', 'RoundController@getAllError');
Route::post('/addBattle','RoundController@addBattle');
Route::post('/battleSolved', 'RoundController@battleSolved');
Route::get('/countSolved/{diff}/{subj}', 'RoundController@countSolved');
Route::get('/getErrorHistory', 'RoundController@getErrorHistory');

// Problem
Route::get('/problem', 'ProblemController@getProblem');
Route::get('/problem/{id}', 'ProblemApiController@getProblem');
Route::get('/problem/sourceCode/C/{id}', 'ProblemController@getSourceCodeC');
Route::get('/problem/feedback/{id}', 'ProblemController@getFeedback');
Route::get('/problem/sourceCode/Cpp/{id}', 'ProblemController@getSourceCodeCpp');
Route::get('/problem/sourceCode/Java/{id}', 'ProblemController@getSourceCodeJava');
Route::post('/problem/description', 'ProblemController@getProblemDescription');
Route::post('/randomProblem', 'ProblemController@getRandomProblem');
Route::post('/getPlayersProblem', 'ProblemController@getPlayersProblem');
Route::post('/judgeCode', 'ProblemController@judgeCode');

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