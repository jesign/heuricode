<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;
use App\Problem;
use App\Round;
use Illuminate\Support\Facades\Auth;

class RoundController extends Controller
{
    public function addRound(Request $request){
    	$problem_code = $request->input("problemCode");

    	$problem_id = Problem::where('problem_code', $problem_code)->first();
    	$problem_id = $problem_id->id;
    	$round = new Round(['problem_id' => $problem_id, 'is_solved' => 0]);

    	
    	$saved = Auth::user()->rounds()->save($round);
    	return $saved->id;
    }
    public function setRound(Request $request){

    	Auth::user()->rounds()->where('id', $request->input('round_id'))
    		->update(['is_solved' => 1]);
    }
}
