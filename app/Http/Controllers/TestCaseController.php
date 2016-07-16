<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Problem;
use GuzzleHttp\Client;
use GuzzleHttp\Subscriber\Oauth\Oauth1;

class TestCaseController extends Controller
{
    public function __construct(){
    	$this->middleware('auth');
    }

    public function getTestCases($id){
    	return Problem::find($id)->testCases()->get();
    }
    public function testing(){

        $base_url = "http://db4262da.problems.sphere-engine.com";
        $client = new Client(['base_url' => $base_url]);
        
        // $response = $client->get('/api/v3/submissions/' + $submissionid + '?access_token=53f4557da7338c7993a582b40614217ef2f73ddd');
        $response = $client->get('/api/v3/submissions/80296?access_token=53f4557da7338c7993a582b40614217ef2f73ddd');


        return $response->getBody();
    }
}