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

	    	// $client = new GuzzleHttp\Client();

	    	// $r = $client->post('http://db4262da.problems.sphere-engine.com/api/v3/submissions', 
		    //            ['json' => [
		    //                "access_token" =>"53f4557da7338c7993a582b40614217ef2f73ddd",
		    //                "problemCode" => "TEST_123",
		    //                "compilerId" => 1,
		    //                "source" => "#include <iostream>"
		    //            ]]);
	    	// echo gettype($r);
	    	// echo "<br><br><pre>";
	    	//  var_dump($r);
	    	//  echo "</pre>";


		// $base_url = "http://db4262da.problems.sphere-engine.com";
  //   	$client = new Client(['base_url' => $base_url]);
    	
		// $response = $client->get('/api/v3/compilers?access_token=53f4557da7338c7993a582b40614217ef2f73ddd');
    	
    	
  //   	return $response->getBody();


    	 // $body = $r->getBody();

    	 // return $body;

    	// $client->request('GET', 'http://db4262da.problems.sphere-engine.com/api/v3/compilers', ["access_token" =>"53f4557da7338c7993a582b40614217ef2f73ddd"]);

    	// echo $client;




        $base_url = "http://db4262da.problems.sphere-engine.com";
        $client = new Client(['base_url' => $base_url]);
        
        // $response = $client->get('/api/v3/submissions/' + $submissionid + '?access_token=53f4557da7338c7993a582b40614217ef2f73ddd');
        $response = $client->get('/api/v3/submissions/80296?access_token=53f4557da7338c7993a582b40614217ef2f73ddd');


        return $response->getBody();
    }
}