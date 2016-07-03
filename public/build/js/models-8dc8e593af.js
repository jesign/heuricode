myApp.factory('userModel', ['$http', function($http){
	return {
		
	};
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
	model.submissionStatusModel = function(id){
		// return $http.get('http://db4262da.compilers.sphere-engine.com/api/v3/submissions/' + id + '?access_token=00c04ffac4d4ffe13d590b91b70ef3f2');

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
		})

	}

	model.testModel = function(){

		return $http({
			headers: {
				'Content-Type': 'application/json'
			},
			url: 'http://db4262da.compilers.sphere-engine.com/api/v3/test?access_token=00c04ffac4d4ffe13d590b91b70ef3f2',
			method: "GET"
		}).success(function(response){
			console.log(response);

		}).error(function(data, status, headers){
			console.log('wala na');
			console.log(data, status, headers);
		});
	};

	model.languageModel = function(){
		return $http.get('http://db4262da.compilers.sphere-engine.com/api/v3/languages?access_token=00c04ffac4d4ffe13d590b91b70ef3f2');
	}
	// http://db4262da.compilers.sphere-engine.com/api/v3/languages?access_token=00c04ffac4d4ffe13d590b91b70ef3f2
	return model;

}]);
myApp.factory('problemModel', ['$http', function($http){
	return {
		getProblem: function(){
			return $http.get(baseUrl + 'problem');
		}
	}

}]);	


//# sourceMappingURL=models.js.map
