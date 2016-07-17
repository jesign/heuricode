myApp.factory('problemModel', ['$http', function($http){
	return {
		getProblem: function(problem_id){
			return $http.get(baseUrl + 'problem/' + problem_id);
		},
		getTestCases: function(problem_id){
			return $http.get(baseUrl + 'testCases/' + problem_id);
		},
		getTesting: function(){
			return $http.get(baseUrl + 'test');
		},
		getSubmissionDetails: function(submissionId){
			return $http.get(baseUrl + 'getSubmissionDetails/' + submissionId);
		},
		getSkeletonCode: function(problemCode, languageId){
			if(languageId == 11) {
				return $http.get(baseUrl + 'problem/sourceCode/C/' + problemCode);
			} else if(languageId == 1) {
				return $http.get(baseUrl + 'problem/sourceCode/Cpp/' + problemCode);
			} else {
				return $http.get(baseUrl + 'problem/sourceCode/Java/' + problemCode);
			}
		},
		getSubmissionId: function(codeData){
			return $http({ 
				headers:{
					'Content-Type': 'application/json'
				},
				url: baseUrl + 'getSubmissionId',
				method: "POST",
				data: {
					'problemCode': codeData.problemCode,
					'compilerId': codeData.compilerId,
					'source': codeData.source
				}
			});
		}
	}

}]);	

 