<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;
use App\Problem;
use App\Round;
use App\Error;
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

    /* Adding Error Counts */
    public function saveError(Request $request){
        $ms = $request->input("MS");
        $se = $request->input("SE");
        $pm = $request->input("PM");
        $ie = $request->input("IE");
        $mode = $request->input('mode');

        Auth::user()->errors()->saveMany([
            new Error(['type' => 1, 'count' => $ms, 'mode' => $mode]),
            new Error(['type' => 2, 'count' => $se, 'mode' => $mode]),
            new Error(['type' => 3, 'count' => $pm, 'mode' => $mode]),
            new Error(['type' => 4, 'count' => $ie, 'mode' => $mode]),
        ]);
        return;
        
    }

    /* Getting errors*/
    public function getAllError($mode){

        $errors =  Auth::user()->errors()->where('mode', $mode)->get();

        if($errors->count() > 0){
            return $errors;
        }else{
            return 0;
        }
    }
}