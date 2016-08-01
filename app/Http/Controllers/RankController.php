<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests;

class RankController extends Controller
{
    public function getRank($id){
    	return $rank = Auth::user()->ranks()->where('weakness_id', $id)->first()->rank;
    }
    public function rankUp(Request $request){
    	$weakness_id = $request->input('weakness_id');
    	Auth::user()->ranks()	
    		->where('weakness_id', $weakness_id)
    		->increment('rank');
    	
    }
    public function rankDown(Request $request){
    	$weakness_id = $request->input('weakness_id');
    	$rank = Auth::user()->ranks()->where('weakness_id', $weakness_id)->first()->rank;
    	
    	if($rank > 1){
	    	Auth::user()->ranks()	
	    		->where('weakness_id', $weakness_id)
	    		->decrement('rank');
    	}	
    }
}
