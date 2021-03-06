myApp.factory('problemModel', ['$http', function($http){
	return {
		getProblem: function(problem_id){
			return $http.get(baseUrl + 'problem/' + problem_id);
		},
		getProblemFeedBack: function(pCode){
			return $http.get(baseUrl + 'problem/feedback/' + pCode);
		},
		getProblemDetails: function(id, mode){
			return $http({
				headers:{
					'Content-Type' : 'application/json'
				},
				url: baseUrl + 'problem/description',
				method: "POST",
				data: {
					'problem_code' : id,
					'mode' : mode
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
		getPlayersProblem: function (p1, p2){
			return $http({
				headers: {
					'Content-Type' :'application/json'
				}, 
				url: baseUrl + 'getPlayersProblem',
				method: "POST",
				data: {
					player1_id: p1,
					player2_id: p2, 
				}
			});
		},
		setWeakness: function(w){
			return $http({
				headers: {
					'Content-Type' :'application/json'
				},
				url: baseUrl + 'setWeakness',
				method: "POST",
				data:{
					weakness: w
				}
			});
		},
		checkHasWeakness: function(){
			return $http.get(baseUrl + 'hasWeakness');
		},
		getErrorHistory: function(){
			return $http.get(baseUrl + 'getErrorHistory');
		}
	}
}]);