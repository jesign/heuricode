<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\SubjectArea;

class ProblemController extends Controller
{
    public function __construct(){
    	$this->middleware('auth');
    }

    public function getProblem(){    	
    	return SubjectArea::find(1)->problems()->first();
    }
}
