myApp.factory('userModel', ['$http' , '$q', function($http, $q){

	return {
		getPlayerDetails: getPlayerDetails,
		getUserId: getUserId,
		checkAuth: checkAuth,
		checkVacantRoom: checkVacantRoom,
		getAllErrorsCount: getAllErrorsCount,
		getBattleRecords: getBattleRecords
	};

	function checkAuth(){
		return $http.get(baseUrl + 'checkAuth');
	}
	
	function checkVacantRoom(rooms){
		var d = $q.defer();
		if(rooms.length == 0){
			d.reject();
		}

		for(var x = 0; x < rooms.length; x ++){
			console.log("looking for vacant room");
			// check if vacant room
			if(rooms[x].player2 === 0){
				
				d.resolve({
					roomKey: rooms[x].$id
				})
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
	function getPlayerDetails(user_id){
		return $http ({
			headers: {
				'Content-Type': 'application/json'
			},
			url: baseUrl + 'getPlayerDetails',
			data: {
				user_id: user_id,
			},
			method: "POST"
		})
	}

	function getAllErrorsCount(e_id){
		return $http.get(baseUrl + 'getAllError/' + e_id);
	}

	function getBattleRecords(){
		return $http.get(baseUrl + 'getBattleRecords');
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
	}

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
	}
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
	model.addBattle = function(opp, pcode){
		return $http({
			headers: {
				'Content-Type' : 'application/json'
			},
			data: {
				'opponent_id' : opp,
				'problemCode' : pcode
			},
			url: baseUrl + 'addBattle',
			method: 'POST'
		});	
	}
	model.setBattle = function(battle_id,isSolved, isWin){
		return $http({
			headers: {
				'Content-Type' : 'application/json'	
			},
			data: {
				'battle_id' : battle_id,
				'isWinner': isWin,
				'isSolved': isSolved
			},
			url: baseUrl + "battleSolved",
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
	model.saveErrors = function(ms, se, pm, ie, modes, round_id){
		return $http({
			headers: {
				'Content-Type' : 'application/json'
			},
			data: {
				MS: ms,
				SE: se, 
				PM: pm,
				IE: ie,
				mode: modes,
				round: round_id
			},
			url: baseUrl + "saveError",
			method: "POST"
		});
	}	

	model.submissionStatusModel = function(id, token){
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
			url: 'http://db4262da.compilers.sphere-engine.com/api/v3/submissions/' + id + '?access_token=' + token,
			method: "GET"
		}).then(function(result){
			return result.data;
		});

	}
	model.judgeCode = function(srcCode, pCode){
		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			params: {
				sourceCode: srcCode,
				problemCode: pCode
			},
			url: baseUrl + 'judgeCode',
			method: 'POST'
		});
	}


	model.languageModel = function(){
		return $http.get('http://db4262da.compilers.sphere-engine.com/api/v3/languages?access_token=00c04ffac4d4ffe13d590b91b70ef3f2');
	}
	// http://db4262da.compilers.sphere-engine.com/api/v3/languages?access_token=00c04ffac4d4ffe13d590b91b70ef3f2
	return model;

}]);
myApp.factory('badgeModel', ['$http', function($http){
	
	var model = {};

	model.getBadges = function(){
		return $http.get(baseUrl + 'getBadges');
	}
	model.getBadgeDetails = function(id){
		return $http.get(baseUrl + 'getBadgeDetails/' + id);
	}
	model.addBadge = function(id){
		return $http({
				headers:{
					'Content-Type' : 'application/json'
				},
				url: baseUrl + 'badges/add',
				method: "POST",
				data: {
					'badge_id' : id,
				}
			});
	}
	model.countSolved = function(diff, subj){
		return $http.get(baseUrl + 'countSolved/' + diff + '/' + subj);
	}
	// http://db4262da.compilers.sphere-engine.com/api/v3/languages?access_token=00c04ffac4d4ffe13d590b91b70ef3f2
	return model;

}]);
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
//# sourceMappingURL=models.js.map
