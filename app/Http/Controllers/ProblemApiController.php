<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use GuzzleHttp\Client;

class ProblemApiController extends Controller
{

    public function getSubmissionId(Request $request){

		$client = new Client;

		$problemCode = $request->input('problemCode');
		$compilerId = $request->input('compilerId');
		$sourceCode = $request->input('source');

		// echo "problem" +  $problemCode;
		$response = $client->post('http://db4262da.problems.sphere-engine.com/api/v3/submissions', 
		               ['json' => [
		                   "access_token" =>"53f4557da7338c7993a582b40614217ef2f73ddd",
		                   "problemCode" => $problemCode,
		                   "compilerId" => $compilerId,
		                   "source" => $sourceCode
		               ]]);

		return $response->getBody();
    }

    public function getSubmissionDetails($submissionid){
    	$base_url = "http://db4262da.problems.sphere-engine.com";
    	$client = new Client(['base_url' => $base_url]);
    	$id = $submissionid;

		// $response = $client->get('/api/v3/submissions/' + $submissionid + '?access_token=53f4557da7338c7993a582b40614217ef2f73ddd');
    	$response = $client->get('/api/v3/submissions/' . $submissionid . '?access_token=53f4557da7338c7993a582b40614217ef2f73ddd');


		return $response->getBody();
    }
    public function test(){
    	echo 'tesssting';
    }
}
