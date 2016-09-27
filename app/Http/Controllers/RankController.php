<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests;
use DB;
class RankController extends Controller
{
    public function getRanks(){
    	$rankSCS = Auth::user()->ranks()->where('weakness_id', 1)->first()->rank;
        $rankRCS = Auth::user()->ranks()->where('weakness_id', 2)->first()->rank;
        $rankARR = Auth::user()->ranks()->where('weakness_id', 3)->first()->rank;

        return array($rankSCS, $rankRCS, $rankARR);
    }
    public function rankUp(Request $request){
    	$weakness_id = $request->input('weakness_id');
    	$rank = Auth::user()->ranks()	
    		->where('weakness_id', $weakness_id)
    		->increment('rank');
    	return DB::table('ranks')->find($rank)->rank;
    }
    public function rankDown(Request $request){
    	$weakness_id = $request->input('weakness_id');
    	$rank = Auth::user()->ranks()->where('weakness_id', $weakness_id)->first()->rank;
    	
    	if($rank > 1){
	    	$new_rank_id = Auth::user()->ranks()	
	    		->where('weakness_id', $weakness_id)
	    		->decrement('rank');
            
            return DB::table('ranks')->find($new_rank_id)->rank;   
        }else{
            return $rank;
        }
    }
}
