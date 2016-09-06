myApp.factory('problemModel', ['$http', function($http){
	return {
		getProblem: function(problem_id){
			return $http.get(baseUrl + 'problem/' + problem_id);
		},
		getProblemDetails: function(id){
			return $http({
				headers:{
					'Content-Type' : 'application/json'
				},
				url: baseUrl + 'problem/description',
				method: "POST",
				data: {
					'problem_code' : id
				}
			});
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
		},
		getWeaknessRank: function(){
			return $http.get(baseUrl + 'ranks');
		},
		getRandomProblem: function(weakness){
			return $http({
				headers: {
					'Content-Type': 'application/json'
				},
				url: baseUrl + 'randomProblem',
				method: "POST",
				data: {
					'weakness_id': weakness
				}
			});
		},
		getPlayersProblem: function (p1, p2, subj){
			return $http({
				headers: {
					'Content-Type' :'application/json'
				}, 
				url: baseUrl + 'getPlayersProblem',
				method: "POST",
				data: {
					player1_id: p1,
					player2_id: p2, 
					subject: subj
				}
			});
		}
	}
}]);