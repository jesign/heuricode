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
    public function __construct(){
        $this->middleware('auth');
    }
    
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
                if($diff == $difficulty && $subj == $subject){
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
        $round = $request->input('round');

        Auth::user()->errors()->saveMany([
            new Error(['type' => 1, 'count' => $ms, 'mode' => $mode, 'round_id' => $round]),
            new Error(['type' => 2, 'count' => $se, 'mode' => $mode, 'round_id' => $round]),
            new Error(['type' => 3, 'count' => $pm, 'mode' => $mode, 'round_id' => $round]),
            new Error(['type' => 4, 'count' => $ie, 'mode' => $mode, 'round_id' => $round]),
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
    public function getErrorHistory(){
        $data = array();

        $rounds = Auth::user()->rounds()->orderBy('created_at', 'desc')->get();
        foreach ($rounds as $round) {
            $problem = Problem::find($round->problem_id);
            $errors = Error::where('round_id', $round->id)->get();

            $attempt_count = Round::where('problem_id', $round->problem_id)->get()->count();
            $solved_count = Round::where('problem_id', $round->problem_id)->where('is_solved', 1)->get()->count();
            $percentage = ($solved_count/$attempt_count)*100;
            if($errors->count()){
                $arr_error = array();

                switch($problem->weakness_id){
                    case 1: 
                        $sa = "Selection Control Structure";
                        break;
                    case 2: 
                        $sa = "Repetition Control Structure";
                        break;
                    case 3: 
                        $sa = "Array";
                        break;
                }

                array_push($data, 
                    array(  'round_id' => $round->id, 
                            'problem_code'=> $problem->problem_code, 
                            'difficulty' => $problem->difficulty, 
                            'problem_title' => $problem->problem_title,
                            'weakness'=> $sa, 
                            'is_solve'=>  $round->is_solved, 
                            'date' => $round->updated_at->toDateString(), 
                            'success_rate' => $percentage,
                            'errors' => array(
                                'ms' => $errors->where('type', 1)->first()->count,  
                                'se' => $errors->where('type', 2)->first()->count,  
                                'pm' => $errors->where('type', 3)->first()->count,  
                                'ie' => $errors->where('type', 4)->first()->count,  
                                )
                    )
                );
                
            }
        }
        return $data;
    }
}
