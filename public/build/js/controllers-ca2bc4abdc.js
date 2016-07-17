myApp.controller('userController', ['$scope', 
	function($scope){


		//function
		angular.extend($scope, {
			testFunction: function(){
				alert('Yeah');
			},

		});

	}]);
myApp.controller('navController', ['$scope', '$rootScope',
	function($scope, $rootScope){

		$rootScope.$on("GlobalToggleSidebar", function(){
           $scope.hideSidebar();
        });

		// variables
		angular.extend($scope, {
			showNav: true
		}); 
		
		// functions
		angular.extend($scope, {

			toggleSidebar: function(){
				console.log('toggled');
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
			hideSidebar: function(){
				
				var sidebar = $("#sidebar-wrapper");
				var content = $("#page-content-wrapper");

				sidebar.css('-webkit-transform', 'translate(-98%,0');
				content.css('padding-left', "0%");
			},
			
		});
	}]);

myApp.controller('codeController', ['$scope','$rootScope', 
		'codeModel', 'problemModel', 'codeDetailsService',
	function($scope,$rootScope, codeModel, problemModel, codeDetailsService){
		// if there is a parameter in a route
		// variables
		angular.extend($scope, {
			newCode: {
				codes: null,
				input: null
			}, 
			languageId: null,
			error: null,
			statusId: null,
			submitId:null,
			showOutput: false,
			showProblem: true,
			compiling: true,
			result: null,
			resultValue: null,
			time: null,
			memory: null,
			signal: null,

			problemCode: null,
			problemTitle: null,
			problemDescription: null,
			problemCodeCpp: null,
			problemCodeJava: null,
			
			submitCodeId: null,
			submitStatusDescription: null,
			checkingResult: false,
			resultSubmissionColor: null,
			errors: {
				ms: 0,
				se: 0,
				pm: 0,
				ree: 0,
				re: 0				
			}
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
						return "Success";
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
			},
			getSubmissionStatus: function(id){				
				$('.nav-tabs a[href="#output"]').tab('show');
				codeModel.submissionStatusModel(id).then(function(response){
					$scope.output = "";
					$scope.error = "";

					$scope.showOutput = true;
					console.log(response);
					$scope.showProblem = true;
					$scope.statusId = response.status;
					var status_id = $scope.statusId;

		  			if(status_id != 0){
		  				$scope.compiling = true;
		  				if(status_id < 0)
		  					$scope.status = "Waiting for compilation...";
		  				else if(status_id == 1)
		  					$scope.status = "Compilation...";
		  				else if(status_id == 3)
		  					$scope.status = "Running...";
		  				$scope.getSubmissionStatus($scope.submitId);
		  			}else{
		  				$scope.status = "";
		  				$scope.compiling = false;
		  				
		  				$scope.time = response.time;
		  				$scope.memory = response.memory;
		  				$scope.signal - response.signal;
		  			}

		  			$scope.resultValue = $scope.getResultValue(response.result);
		  			console.log($scope.getResultValue(response.result));
		  			if(response.result == 15){
		  				$scope.resultValueColor = "resultValSuccess";
		  				$scope.output = response.output;
		  			}else{
		  				$scope.resultValueColor = "resultValError";
		  				$scope.error = response.cmpinfo;
		  				$scope.getErrors();
		  			}

				})
			},
			runCode: function(editorForm){

				var editor = ace.edit("editor");
				var code = editor.getValue();
				console.log("code " + code);
				$.ajax({
				  	type: "POST",
				  	url: 'http://db4262da.compilers.sphere-engine.com/api/v3/submissions?access_token=00c04ffac4d4ffe13d590b91b70ef3f2',
				  	// contentType: 'application/json',
				  	data: 
				  		// JSON.stringify(
				  		{
				 		sourceCode: code,
				 		language: $scope.languageId,
				 		input: $scope.newCode.input
				 	}
					 	// )
					,
				  	success: function(result, data){
				  		var obj = JSON.parse(result);
					  	$scope.submitId = obj.id;
				  		console.log(obj.id);
		  				$scope.getSubmissionStatus($scope.submitId);
				  	}
				});
			},
			testError: function(){			
				
				// $('#myModal').modal('show')	
				console.log('yeah');
				$scope.getSubmissionStatus(47872263);
			},
			testSuccess: function(){
				$scope.getSubmissionStatus(47900843);
				console.log('');
			},
			testModal: function(){
				// $scope.resultSubmissionColor = "submission-running";
				// $scope.submitStatusDescription = "Accepted!";				
				// $('#myModal').modal({ keyboard: false, backdrop: false, show: true });
				$scope.testError();			
			},
			SubmitCode: function(){
				var problemCode = $scope.problemCode;
				var editor = ace.edit("editor");
				var code = editor.getValue();
				console.log(problemCode);
				var codeData = {
					problemCode: problemCode,
					compilerId: $scope.languageId,
					source: code
				}
				var submissionId;

				problemModel.getSubmissionId(codeData)
					.then(function(response){

						$scope.checkingResult = false;
						$scope.submitCodeId = response.data.submissionId;
						$scope.resultSubmissionColor = "submission-running";
						$scope.submitStatusDescription = "";
						$scope.testGetProblemDetails();
					});
			},
			testGetProblemDetails: function(){
				$('#myModal').modal({ keyboard: false, backdrop: false, show: true })
				problemModel.getSubmissionDetails($scope.submitCodeId)
					.success(function(response){
						console.log(response.statusDescription);
						var status_id = response.status;
						$scope.submitStatusDescription = response.statusDescription;
						if(status_id < 9){

							$scope.testGetProblemDetails();
						}else{
							$scope.checkingResult = true;
							if(status_id == 15){
								$scope.resultSubmissionColor = "submission-accepted";
								$scope.submitStatusDescription = "Accepted!";
							}else{
								$scope.resultSubmissionColor = "submission-error";
							}
						}

				});
			},
			getErrors: function(){
				var str_error = $scope.error;
				var array_error = str_error.split("\n");

				for(i = 0; i < array_error.length; i ++){
					console.log(array_error[i]);
				}
			},
			getSkeletonCode: function(problem_code, language_id){
				problemModel.getSkeletonCode(problem_code, language_id) 
					.success(function(response){
						console.log(response);
						
						$scope.newCode.codes = response;
						var sc = $scope.newCode.codes;
					    var editor = ace.edit("editor");
					    editor.setTheme("ace/theme/monokai");
					    editor.getSession().setValue(sc);
					    editor.resize();
						});
			}
		});

		// automatic activity
		if(codeDetailsService.getIsEnableCode()){
			// get problem details
			var pCode = codeDetailsService.getProblemCode();
			var langId = codeDetailsService.getLanguage();
			// set problem details
			$scope.problemCode = pCode;
			$scope.languageId = langId;

			problemModel.getProblem($scope.problemCode)
				.success(function(response){		
					$rootScope.$emit("GlobalToggleSidebar", {});

					$('.nav-tabs a[href="#problem_details"]').tab('show');

					$scope.problemTitle = response.name;
					$scope.problemDescription = response.body;

					$scope.getSkeletonCode($scope.problemCode, $scope.languageId);
					
				})
				.error(function(result){
					console.log(result);
				});
			
		}else{
			console.log('unable to code');
		}	
	}]);
myApp.controller('problemController', ['$scope','problemModel', '$state', 'codeDetailsService',
	function($scope, problemModel, $state,codeDetailsService){

		// variables
		angular.extend($scope, {
			problemCode: null,
			language: "C",
			languageId: 11
		});

		// functions
		angular.extend($scope,{
			getProblemCode: function(){
				$scope.problemCode = 'TEST_111';
				$scope.getProblem($scope.problemCode);
			},
			getProblem: function(problemCode){
				problemModel.getProblem(problemCode).success(function(response){
					$scope.problemTitle = response.name;
					$scope.problemDescription = response.body;
				});
			},
			solveIt: function(id){
				console.log(id);
				console.log($scope.languageId);
				codeDetailsService.setProblemCode(id);
				codeDetailsService.setIsEnableCode(true);
				$state.go('codingPage');
				
			},
			languageToC: function(){
				$scope.language = "C";
				$scope.languageId = 11;
				codeDetailsService.setLanguage(11);
			},
			languageToCpp: function(){
				$scope.language = "C++";
				$scope.languageId = 1;
				codeDetailsService.setLanguage(1);
			},
			languageToJava: function(){
				$scope.language = "Java";
				$scope.languageId = 10;
				codeDetailsService.setLanguage(10);
			}

		});

		// Activities
		$scope.getProblemCode();
		$scope.languageToC();
	}]);

//# sourceMappingURL=controllers.js.map
