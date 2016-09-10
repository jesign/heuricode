myApp.factory('userModel', ['$http' , '$q', function($http, $q){

	return {
		getPlayerDetails: getPlayerDetails,
		getUserId: getUserId,
		checkAuth: checkAuth,
		getMatchedUser: getMatchedUser,
		checkVacantRoom: checkVacantRoom,
		checkIfMatchingUser: checkIfMatchingUser,
		getAllErrorsCount: getAllErrorsCount,
	};

	function checkAuth(){
		return $http.get(baseUrl + 'checkAuth');
	}

	function checkIfMatchingUser(player1){
		return $http ({
			headers: {
				'Content-Type' : 'application/json'
			},
			url: baseUrl + 'checkIfMatch', 
			data: {
				player1_id: player1
			},
			method: "POST"
		});
	}

	function checkVacantRoom(rooms, scs, rcs, arr){

		var d = $q.defer();

		if(rooms.length == 0){
			d.reject();
		}

		for(var x = 0; x < rooms.length; x ++){
			console.log("looking for vacant room");
			// check if vacant room
			if(rooms[x].player2 == 0){
				
				d.resolve({
					roomKey: rooms[x].$id
				})

				// /* check if player 1 is a matching user */
				
				// var p2_scs = rooms[x].level.scs;
				// var p2_rcs = rooms[x].level.rcs;
				// var p2_arr = rooms[x].level.arr;

				// if(scs == p2_scs || Math.abs(scs - p2_scs) == 1){
				// 	d.resolve({
				// 		roomKey: rooms[x].$id,
				// 		player_id: rooms[x].player1,
				// 		subject: 1,
				// 		level: p2_scs
				// 	});
				// }
				// if(rcs == p2_rcs || Math.abs(rcs - p2_rcs) == 1){
				// 	d.resolve({
				// 		roomKey: rooms[x].$id,
				// 		subject: 2,
				// 		level: p2_rcs
				// 	});
				// }
				// if(arr == p2_arr || Math.abs(arr - p2_arr) == 1){
				// 	d.resolve({
				// 		roomKey: rooms[x].$id,
				// 		subject: 3,
				// 		level: p2_arr
				// 	});
				// }
			}				
		}
		
		d.reject();

		return d.promise;
	}
	function getUserId(){			
		return $http ({
			headers: {
				'Content-Type' : 'application/json'
			},
			url: baseUrl + 'userId',
			method: "POST"
		});
	}
	function getMatchedUser(online_users, except_users){
		return $http ({
			headers: {
				'Content-Type': 'application/json'
			},
			url: baseUrl + 'findMatch',
			data: {
				online_users,
				users: online_users,
				excepts: except_users
			},
			method: "POST"
		});
	}
	function getPlayerDetails(user_id,subj){
		return $http ({
			headers: {
				'Content-Type': 'application/json'
			},
			url: baseUrl + 'getPlayerDetails',
			data: {
				user_id: user_id,
				subject: subj
			},
			method: "POST"
		})
	}

	function getAllErrorsCount(e_id){
		return $http.get(baseUrl + 'getAllError/' + e_id);
	}

}]);
myApp.factory('codeModel', ['$http', function($http){
	
	var model = {};

	model.runCodeModel = function(srcCode){
		var lang_id = srcCode.langId;
		var codes = srcCode.codes;

		$.ajax({
		  type: "POST",
		  url: 'http://db4262da.compilers.sphere-engine.com/api/v3/submissions?access_token=00c04ffac4d4ffe13d590b91b70ef3f2',
		  data: {
		 		sourceCode: codes,
		 		language: lang_id
		 	},
		  success: function(result){
		  	return result;
		  }
		  
		});
	};

	model.addRound = function(problemCode){
		return $http({
			headers: {
				'Content-Type' : 'application/json'
			},
			data: {
				'problemCode' : problemCode
			},
			url: baseUrl + "round/add",
			method: "POST"
		});
	};

	model.setRound = function(round_id){
		return $http({
			headers: {
				'Content-Type' : 'application/json'	
			},
			data: {
				'round_id' : round_id
			},
			url: baseUrl + "round/set",
			method: "POST"
		});		
	}

	model.rankUp = function(weakness_id){
		return $http({
			headers: {
				'Content-Type' : 'application/json'	
			},
			data: {
				'weakness_id' : weakness_id
			},
			url: baseUrl + "rank/up",
			method: "POST"
		});			
	}
	model.saveErrors = function(ms, se, pm, ie, mode){
		return $http({
			headers: {
				'Content-Type' : 'application/json'
			},
			data: {
				MS: ms,
				SE: se, 
				PM: pm,
				IE: ie,
				mode: mode
			},
			url: baseUrl + "saveError",
			method: "POST"
		});
	}	

	model.submissionStatusModel = function(id){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			params: {
				withSource: true,
				withInput: true,
				withOutput: true,
				withStderr: true,
				withCmpinfo: true
			},
			url: 'http://db4262da.compilers.sphere-engine.com/api/v3/submissions/' + id + '?access_token=00c04ffac4d4ffe13d590b91b70ef3f2',
			method: "GET"
		}).then(function(result){
			return result.data;
		});

	}


	model.languageModel = function(){
		return $http.get('http://db4262da.compilers.sphere-engine.com/api/v3/languages?access_token=00c04ffac4d4ffe13d590b91b70ef3f2');
	}
	// http://db4262da.compilers.sphere-engine.com/api/v3/languages?access_token=00c04ffac4d4ffe13d590b91b70ef3f2
	return model;

}]);
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
		}
	}
}]);
//# sourceMappingURL=models.js.map
