myApp.controller('codeController', ['$scope', 'codeModel', 
	function($scope, codeModel){
		// variables
		angular.extend($scope, {
			codeLanguage: "C++",
			newCode: {
				codes: "#include int main(){ printf(\"Hello!\"); return 0; }",
				langId: 1,
				error: null,
				statusId: null,
				submitId:null,
				showOutput: false,
				showProblem: true,
				compiling: false,
				result: null
			},
		});
		 
		// functions
		angular.extend($scope, {
			getSubmissionStatus: function(id){				
				codeModel.submissionStatusModel(id).success(function(response){
					console.log(response);
					$scope.compiling = true;					
					$scope.statusId = response.status;
		  			console.log($scope.statusId);
		  			$scope.showOutput = false;
		  			if($scope.statusId != 0){
		  				$scope.getSubmissionStatus($scope.submitId);
		  			}
		  			$scope.showOutput = true;

		  			$scope.compiling = false;

		  			if(response.cmpinfo){
		  				$scope.error = true;
		  				$scope.result = "Error: \n" + response.cmpinfo;
		  			}else{
		  				$scope.result = response.output;
		  			}


				})
			},
			runCode: function(editorForm){
				$.ajax({
				  type: "POST",
				  url: 'http://db4262da.compilers.sphere-engine.com/api/v3/submissions?access_token=00c04ffac4d4ffe13d590b91b70ef3f2',
				  data: {
				 		sourceCode: $scope.newCode.codes,
				 		language: $scope.newCode.langId
				 	},
				  success: function(result, data){
				  	var obj = JSON.parse(result);
				  	$scope.submitId = obj.id;
				  	console.log(obj.id);
		  			
		  			$scope.getSubmissionStatus($scope.submitId);
				  }
				  
				});
			},
			languageToCpp: function(){
				$scope.codeLanguage = "C++";
				$scope.newCode.langId = 1;
				console.log($scope.codeLanguage + " - " + $scope.newCode.langId );
			},
			languageToJava: function(){
				$scope.codeLanguage = "Java";
				$scope.newCode.langId = 10;
				console.log($scope.codeLanguage + " - " + $scope.newCode.langId );
			},
			submitCode: function(){
				
			},
			toggleOutput: function(){
				$scope.showOutput = $scope.showOutput === false ? true: false;
			},
			toggleProblem: function(){
				$scope.showProblem = $scope.showProblem === false ? true: false;
			},
			testError: function(){
				$scope.getSubmissionStatus(47872263);
			},
			testSuccess: function(){
				$scope.getSubmissionStatus(47900843);
			}
			
		});
	}]);