<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Problem;

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

}
