<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;

class UserController extends Controller
{
    public function checkAuth(Requests $request){
    	if (Auth::check())
		{
			$user = User::find($request->user()->id)->get();
		    // response($user, 422);
		    return response(422);
		}else{
			return response(201);
		}
    }
}
