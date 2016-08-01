<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function checkAuth(Request $request){
    	if (Auth::check())
		{
		    return 1;
		}else{
			return 0;
		}
    }

    public function findMatch(){
    	$online_users_id = array();

    	$selected_user = 0;
    	$selected_weakness = 0;
    	for($user = 1; $user < $online_users_id.length(); $user++){
	    	$proceed = true;
	    	for($w = 1; $w < 4 ; $w++){
	    		$a_rank = Auth::user()->ranks()
	    			->where('weakness_id', $w)->first()->value('rank');
	    		$u_rank = User::find($user)->ranks()
	    			->where('weakness_id', $w)->first()->value('rank');
	    		if($a_rank == $u_rank || $a_rank == $u_rank + 1 || $a_rank == $u_rank - 1){
	    			$selected_user = $user;
	    			$selected_weakness = $w;
	    			break;
	    		}
	    	}
	    	if($selected_user != 0 || $selected_weakness != 0){
	    		break;
	    	}
    	}

    	$result = array($selected_user, $selected_weakness);

		return $result;
    }
}
