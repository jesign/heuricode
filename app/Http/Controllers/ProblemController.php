<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Problem;
use Illuminate\Support\Facades\Auth;

class ProblemController extends Controller
{
    public function __construct(){
    	$this->middleware('auth');
    }
	public function getSourceCodeC($id){    	
    	$problem = Problem::where('problem_code', $id)->first();
    	return $problem->skeleton_code_c;
    }
    public function getSourceCodeCpp($id){    	
    	$problem = Problem::where('problem_code', $id)->first();
    	return $problem->skeleton_code_cpp;
     }    
    public function getSourceCodeJava($id){    	
    	$problem = Problem::where('problem_code', $id)->first();
    	return $problem->skeleton_code_java;
    }
    public function getRandomProblem(Request $request){
        // set weakness
        $weakness_id = $request->input('weakness_id');
        // setting difficulty
        $difficulty;
        // get weakness rank
        $rank =  Auth::user()->ranks()->where('weakness_id', $weakness_id)->first();
        $rank = $rank->rank;

        if($rank >=1 && $rank <= 10){
            $difficulty = "easy";
        }else if($rank >= 11 && $rank <= 25){
            $difficulty = "average";
        }else if($rank >= 26 && $rank <= 40){
            $difficulty = "problem";
        }

        // get all solved problems from rounds table
        $rounds = Auth::user()->rounds()->where('is_solved', '!=', '0')->get();

        // get all problems base of weakness and difficulty excluding the solved problem
        $notSolved = array();
        foreach ($rounds as $round) {
            $new_array = array('id', '!=', $round->problem_id);
            array_push($notSolved, $new_array);
        }
        
        $problems =  DB::table('problems')->where($notSolved)->where('weakness_id', $weakness_id)->where('difficulty', $difficulty)->get();


        // get random problems
        
        $problem_code_array = [];
        if(count($problems)) {
            foreach ($problems as $problem) {
                array_push($problem_code_array, $problem->problem_code);
            }
            $selected = array_rand($problem_code_array,1);
        }else{
            array_push($problem_code_array,0);
            $selected = 0;
        }
        
        return $problem_code_array[$selected];
    }
}
