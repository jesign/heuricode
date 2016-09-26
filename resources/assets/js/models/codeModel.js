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
	model.saveErrors = function(ms, se, pm, ie, modes){
		return $http({
			headers: {
				'Content-Type' : 'application/json'
			},
			data: {
				MS: ms,
				SE: se, 
				PM: pm,
				IE: ie,
				mode: modes
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