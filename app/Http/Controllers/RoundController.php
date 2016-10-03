<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;
use App\Http\Requests;
use App\User;
use App\Problem;
use App\Round;
use App\Error;
use App\Battle;
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
    public function countSolved($difficulty, $subject){

        $rounds = Auth::user()->rounds()->where('is_solved', 1)->get();        
        $count = 0;
        foreach ($rounds as $round) {
            $diff = Problem::find($round->problem_id)->difficulty;
            if($subject == 0){
                if($diff == $difficulty){
                    $count++;
                }
            }else{
                $subj = Problem::find($round->problem_id)->weakness_id; 
                if($diff == $difficulty || $subj == $subject){
                    $count++;
                }
            }
        }

        return $count;
    }

    public function addBattle(Request $request){
        $opponent = $request->input('opponent_id');
        $problem_code = $request->input('problemCode');

        $problem_id = DB::table('multiplayer_problems')->where('problem_code', $problem_code)->first();
        $problem_id = $problem_id->id;

        $battle = new Battle(['opponent_id'=> $opponent, 
                            'problem_id' => $problem_id, 
                            'is_solved' => 0,
                            'is_winner' => 0 ]);
        $saved = Auth::user()->battles()->save($battle);
        return $saved->id;
    }
    public function battleSolved(Request $request){
        Auth::user()->battles()->where('id', $request->input('battle_id'))
            ->update(['is_solved' => $request->input('isSolved'),
                     'is_winner'  => $request->input('isWinner')]);
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
