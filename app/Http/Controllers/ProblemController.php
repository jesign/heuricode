<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Problem;
use Illuminate\Support\Facades\Auth;
use App\User;   
use App\MultiplayerProblem;
use App\Feedback;

class ProblemController extends Controller
{
    public function __construct(){
    	$this->middleware('auth');
    }
    public function getProblemDescription(Request $request){
        $problem_code = $request->input('problem_code');
        $mode = $request->input('mode');
        if($mode == "single"){
            return Problem::where('problem_code', $problem_code)->first();
        }
        else{
            return MultiplayerProblem::where('problem_code', $problem_code)->first();
        }
    }
    public function getFeedback($pcode){
        $feedback_id = Problem::where('problem_code', $pcode)->first()->feedback_id;
        return Feedback::find($feedback_id)->description;
    }
    public function getPlayersProblem(Request $request){
        /* getting data from the request*/
        
        $p1_id = $request->input('player1_id');
        $p2_id = $request->input('player2_id');

        $p1_solved_rounds = User::find($p1_id)->battles()
                ->where('is_solved', '!=', '0')
                ->get();

        $p2_solved_rounds = User::find($p2_id)->battles()
                ->where('is_solved', '!=', '0')
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
        
        /* getting all the unsolved problem */
        $problems = DB::table('multiplayer_problems')->where($solved)->get();
        
        /* get random problems */
        $problem_code_array = [];
        if(count($problems)) {
            foreach ($problems as $problem) {
                array_push($problem_code_array, $problem->problem_code);
            }
            $selected = array_rand($problem_code_array,1);
        }else{
            $problems = DB::table('multiplayer_problems')->get();

            foreach ($problems as $problem) {
                array_push($problem_code_array, $problem->problem_code);
            }
            $selected = array_rand($problem_code_array,1);
        }
        return $problem_code_array[$selected];
    }
    public function judgeCode(Request $request){
        $sourceCode = $request->input('sourceCode');
        $problemCode = $request->input('problemCode');

        $result = "good";

        $problem = Problem::where('problem_code', $problemCode)->first();
        $judgement = $problem->judgement;
        $sourceCode=preg_replace('/\s+/', '', $sourceCode);
        $judgements = (explode("-",$judgement)); 

        foreach ($judgements as $judge) {
            $pos = strpos($sourceCode, $judge);
            
            if($pos === false){
                $result = "bad";
                break;
            }
        }
    
        echo $result;
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
            $difficulty = "hard";
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
