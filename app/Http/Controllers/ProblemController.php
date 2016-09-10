<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Problem;
use Illuminate\Support\Facades\Auth;
use App\User;   

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
    public function getProblemDescription(Request $request){
        $problem_code = $request->input('problem_code');
        return Problem::where('problem_code', $problem_code)->first();
    }
    public function getPlayersProblem(Request $request){
        /* getting data from the request*/
        $weakness_id = $request->input('subject');
        $p1_id = $request->input('player1_id');
        $p2_id = $request->input('player2_id');

        /* getting player1's rank */
        // $p1_rank = User::find($p1_id)->ranks()->where('weakness_id', $weakness_id)->first();

        /* setting the difficulty */
        // $p1_rank = $p1_rank->rank;
        // if($p1_rank >=1 && $p1_rank <= 10){
        //     $difficulty = "easy";
        // }else if($p1_rank >= 11 && $p1_rank <= 25){
        //     $difficulty = "average";
        // }else if($p1_rank >= 26 && $p1_rank <= 40){
        //     $difficulty = "problem";
        // }

        /* getting all the solved problems of the players */

        $p1_solved_rounds = User::find($p1_id)->rounds()
                ->where('is_solved', '!=', '0')
                ->where('mode', 'multiplayer')
                ->get();

        $p2_solved_rounds = User::find($p2_id)->rounds()
                ->where('is_solved', '!=', '0')
                ->where('mode', 'multiplayer')
                ->get();

        /* setting query to exclude the solved problems */
        $solved = array();
        foreach ($p1_solved_rounds as $round) {
            $new_array = array('id', '!=', $round->problem_id);
            array_push($solved, $new_array);
        }
        foreach ($p2_solved_rounds as $round) {
            $new_array = array('id', '!=', $round->problem_id);
            array_push($solved, $new_array);
        }
        /* getting all the unsolved problems based on weakness and difficulty*/
        // $problems = DB::table('problems')->where($solved)->where('weakness_id', $weakness_id)->where('difficulty', $difficulty)->get();

        /* getting all the unsolved problem in new multiplayer mode */
        $problems = DB::table('problems')->where($solved)->where('mode', 'multiplayer')->get();        

        /* get random problems */
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
    public function getRandomProblem(Request $request){
        // set weakness
        $weakness_id = $request->input('weakness_id');
        // get weakness rank
        $rank =  Auth::user()->ranks()->where('weakness_id', $weakness_id)->first();
        $rank = $rank->rank;

        // setting difficulty
        $difficulty;
        if($rank >=1 && $rank <= 10){
            $difficulty = "easy";
        }else if($rank >= 11 && $rank <= 25){
            $difficulty = "average";
        }else if($rank >= 26 && $rank <= 40){
            $difficulty = "problem";
        }

        // get all solved problems from rounds table
        $rounds = Auth::user()->rounds()->where('is_solved', '!=', '0')->get();

        // setting query to exclude solved problems
        $solved = array();
        foreach ($rounds as $round) {
            $new_array = array('id', '!=', $round->problem_id);
            array_push($solved, $new_array);
        }
        
        // get all problems base on weakness and difficulty excluding the solved problem
        $problems = DB::table('problems')->where($solved)->where('weakness_id', $weakness_id)->where('difficulty', $difficulty)->get();

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
        /* will respond 0 when no problem found */
        return $problem_code_array[$selected];
    }
}
