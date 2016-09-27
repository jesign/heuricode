<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use GuzzleHttp\Client;

class ProblemApiController extends Controller
{ 
	private $problem_access_token;

	public function __construct(){
		$this->problem_access_token = "65f7097da2169c0a77a6370d9c266b5810baa24c";
	}

	public function getProblem($code){
		$base_url = "http://db4262da.problems.sphere-engine.com";
		$client = new Client(['base_url' => $base_url]);
		$response = $client->get('/api/v3/problems/' . $code . '?access_token='. 
			$this->problem_access_token);
		return $response->getBody();
	}

	public function getAllProblem(){
		$base_url = "http://db4262da.problems.sphere-engine.com";
		$client = new Client(['base_url' => $base_url]);
		$response = $client->get('/api/v3/problems?access_token=' . $this->problem_access_token);
		return $response->getBody();
	}
	
    public function getSubmissionId(Request $request){

		$client = new Client;

		$problemCode = $request->input('problemCode');
		$compilerId = $request->input('compilerId');
		$sourceCode = $request->input('source');

		$response = $client->post('http://db4262da.problems.sphere-engine.com/api/v3/submissions', 
		               ['json' => [
		                   "access_token" =>$this->problem_access_token,
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

    	$response = $client->get('/api/v3/submissions/' . $submissionid . '?access_token=' . $this->problem_access_token);

		return $response->getBody();
    }
    public function test(){
    	echo 'tesssting';
    }
}
