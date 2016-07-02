myApp.controller('userController', ['$scope', 
	function($scope){


		//function
		angular.extend($scope, {
			testFunction: function(){
				alert('Yeah');
			}
		});

	}]);
myApp.controller('navController', ['$scope', 
	function($scope){


		// variables
		angular.extend($scope, {
			showNav: true
		});
		
		// functions
		angular.extend($scope, {
			test: function(){
				var sidebar = $("#sidebar-wrapper");
				var content = $("#page-content-wrapper");
				if(sidebar.hasClass("open")){
					sidebar.css('-webkit-transform', 'translate(-98%,0');
					content.css('padding-left', "0%");
				}else{
					sidebar.css('-webkit-transform', 'translate(0,0');	
					content.css('padding-left', "260px");
				}
				sidebar.toggleClass("open");
			},
			notAuth: function(){
				
				var sidebar = $("#sidebar-wrapper");
				var content = $("#page-content-wrapper");

				sidebar.css('-webkit-transform', 'translate(-98%,0');
				content.css('padding-left', "0%");

				console.log('Not auth');
			},
			

		});
	}]);

myApp.controller('codeController', ['$scope', 'codeModel', 
	function($scope, codeModel){
		// variables
		angular.extend($scope, {
			codeLanguage: "C++",
			newCode: {
				codes: "#include int main(){ printf(\"Hello!\"); return 0; }",
				langId: 1
			},
			error: null,
			statusId: null,
			submitId:null,
			result: null,
			showOutput: false,
			showProblem: true,
			compiling: false
		});
		 
		// functions
		angular.extend($scope, {
			getResultValue: function(id){
				switch(id){
					case 11: 
						return "Compilation Error";
					break;
					case 12:
						return "Runtime Error";
					break;
					case 13:
						return "Time limit Exceeded";
					break;
					case 15: 
						return "success";
					break;
					case 17: 
						return "Memory Limit Exceeded";
					break;
					case 19:
						return "Illegal System Call";
					break;
					case 20:
						return "Internal Error";
					break;
				}
			}
			getSubmissionStatus: function(id){				
				codeModel.submissionStatusModel(id).success(function(response){
					console.log(response);
					
					$scope.statusId = response.status;
					var status_id = $scope.statusId;

		  			if(status_id != 0){
		  				if(status_id < 0)
		  					$scope.result = "waiting for compilation...";
		  				else if(status_id == 1)
		  					$scope.result = "compilation...";
		  				else if(status_id == 3)
		  					$scope.result = "running...";
		  				$scope.getSubmissionStatus($scope.submitId);
		  			}

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
			toggleProblemDetails: function(){
				console.log($scope.showProblem)
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
//# sourceMappingURL=controllers.js.map
