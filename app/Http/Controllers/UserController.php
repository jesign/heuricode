<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App;
use App\Http\Requests;
use App\User;
use App\Rank;
use App\Badge;
use App\Problem;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }
    public function checkAuth(Request $request){
    	if (Auth::check())
		{
		    return 1;
		}else{
			return 0;
		}
    }

    public function findMatch(Request $request){

    	// get data from requests.
    	$online_users_id = $request->input('users');
    	$excepts = $request->input('excepts');
    	
    	// var_dump($excepts);

    	// remove if authenticated user id exists
		while((array_search(Auth::user()->id, $online_users_id) ===  false ? false : true)){
			$k = array_search(Auth::user()->id, $online_users_id);
			array_splice($online_users_id, $k, 1);
		}
		// remove all the excluded online_users_id users 
		for($y = 0; $y < count($excepts); $y++){
    		while((array_search($excepts[$y], $online_users_id) ===  false ? false : true)){
    			$key = array_search($excepts[$y], $online_users_id);

    			array_splice($online_users_id, $key, 1);
    		}
		}
		//get the first matched user
    	$matched_users = [];
    	for($user = 0; $user < count($online_users_id); $user++){
	    	
	    	for($w = 1; $w < 4 ; $w++){

	    		$a_rank = Auth::user()->ranks()
	    			->where('weakness_id', $w)->first()->rank;
	    		$u_rank = User::find($online_users_id[$user])->ranks()
	    			->where('weakness_id', $w)->first()->rank;

	    		if($a_rank == $u_rank || $a_rank == ($u_rank + 1) || $a_rank == ($u_rank - 1)){
	    				
	    			$matched_user = array($online_users_id[$user], $w);

	    			array_push($matched_users, $matched_user);
	    			break;
	    		}
	    	}
    	}

    	if(count($matched_users) > 0){
    		$random = rand(0, count($matched_users)-1);
    		$result = $matched_users[$random];
    	}else{
    		$result = array(0,0);
    	}

		return $result;
    }
    public function getUserId(){
    	return Auth::user()->id;
    }
    public function getPlayerDetails(Request $request){
        // get players id both 1 and 2
        $user1 = $request->input('user_id');
        // get user details
        $u1 = User::find($user1);
        
        // get user ranks
        return $u1->name;
    }
    public function setWeakness(Request $request){
        Auth::user()->update(['weakness' => $request->input('weakness')]);
        return;
    }
    public function hasWeakness(){
        return Auth::user()->weakness;
    }
    public function getBattleRecords(){
        $wins = Auth::user()->battles()->where('is_winner', 1)->count();
        $lose = Auth::user()->battles()->where('is_winner', 0)->count();
        $solved = Auth::user()->battles()->where('is_solved', 1)->count();

        return [
                'wins' => $wins,
                'lose' => $lose,
                'solved' => $solved
            ];
    }
    public function getBadges(){
        return Auth::user()->badges;
    }
    public function getBadgeDetails($id){
        return Badge::find($id);
    }
    public function addBadge(Request $request){
        $badge_id = $request->input('badge_id');
        Auth::user()->badges()->attach($badge_id);

        return Badge::find($badge_id);
    }
}
    