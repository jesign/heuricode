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
		'codeModel', 'problemModel', 'codingService', '$state',
		'errorService',
	function($scope,$rootScope, codeModel, problemModel, codingService,$state, errorService){
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
			},
			test_error_number: 0
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
					default: 
						return 0;
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
					console.log(status_id);
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
		  			console.log(response.result);
		  			console.log($scope.getResultValue(response.result));
		  			
	  			
		  			if(response.result == 15){
		  				$scope.resultValueColor = "resultValSuccess";
		  				$scope.output = response.output;
		  			}else if(response.result == 12){
		  				errorService.addErrorCountRE(1);
		  			}else{
		  				$scope.resultValueColor = "resultValError";
		  				$scope.error = response.cmpinfo;
		  				// Missing Semicolon Error
		  				$scope.getErrorsMS();
						$scope.getErrorsSE();
						$scope.getErrorsPM();
						$scope.getErrorsREE();

						$scope.errors.ms = errorService.getErrorCountMS();
						$scope.errors.se = errorService.getErrorCountSE();
						$scope.errors.pm = errorService.getErrorCountPM();
						$scope.errors.ree = errorService.getErrorCountREE();
						$scope.errors.re = errorService.getErrorCountRE();
						// count error here. call error service
		  			}
	  			

				});
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
			},
			testing1: function(){
				$scope.getSubmissionStatus(48791363);
				
			},
			testing2: function(){
				$scope.getSubmissionStatus(48791371);
				
			},
			testing3: function(){
				$scope.getSubmissionStatus(47900843);
				
			},
			getErrorsMS: function(){
				var str_error = $scope.error;
				var array_error = str_error.split("prog.");
				var number_of_errors = 0;
				switch($scope.languageId){
					case 1:
						for(i = 0; i < array_error.length; i ++){
							var str = array_error[i];
								if(str.includes("expected ';' before")){
									number_of_errors ++;
								} 
						}
						errorService.addErrorCountMS(number_of_errors);		 
						break;
					case 10:
						break;
					case 11:
				}
				
			},
			getErrorsSE: function(){
				var str_error = $scope.error;
				var array_error = str_error.split("prog.");
				var number_of_errors = 0;

				switch($scope.languageId){
					case 1:
						for(i = 0; i < array_error.length; i ++){
							var str = array_error[i];
							if(str.includes("was not declared in this scope")){
								number_of_errors ++;
							} 
						}
						errorService.addErrorCountSE(number_of_errors);		 
						break;
					case 10:
						
						break;
					case 11:
				}
			},
			getErrorsPM: function(){
				var str_error = $scope.error;
				var array_error = str_error.split("prog.");
				var number_of_errors = 0;

				switch($scope.languageId){
					case 1:
						for(i = 0; i < array_error.length; i ++){
							var str = array_error[i];
							if(str.includes("expected ')'")){
								number_of_errors ++;
							} else if(str.includes("expected ']'")){
								number_of_errors ++;
							} else if(str.includes("expected '}'")){
								number_of_errors ++;
							} else if(str.includes("expected '('")){
								number_of_errors ++;
							} else if(str.includes("expected '{'")){
								number_of_errors ++;
							}else if(str.includes("expected '['")){
								number_of_errors ++;
							} 
						}
						errorService.addErrorCountPM(number_of_errors);		 
						break;
					case 10:
						
						break;
					case 11:
				}					
			},
			getErrorsREE: function(){
				var str_error = $scope.error;
				var array_error = str_error.split("prog.");
				var number_of_errors = 0;
				switch($scope.languageId){
					case 1:
						for(i = 0; i < array_error.length; i ++){
							var str = array_error[i];
								if(str.includes("expected primary-expression before")){
									number_of_errors ++;
								} 
						}
						errorService.addErrorCountREE(number_of_errors);		 
						break;
					case 10:
						break;
					case 11:
				}
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
		if(codingService.getIsEnableCode()){
			// get problem details
			var pCode = codingService.getProblemCode();
			var langId = codingService.getLanguage();
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
			$state.go('problemPage');
			console.log('unable to code');
		}	
	}]);
myApp.controller('problemController', ['$scope','problemModel', '$state', 'codingService',
	function($scope, problemModel, $state,codingService){

		// variables
		angular.extend($scope, {
			problemCode: null,
			language: "C",
			languageId: 11,
			loadingProblem: true
		});

		// functions
		angular.extend($scope,{
			getProblemCode: function(){
				$scope.problemCode = 'TEST_111';
				$scope.getProblem($scope.problemCode);
			},
			getProblem: function(problemCode){
				problemModel.getProblem(problemCode).success(function(response){
					$scope.loadingProblem = false;
					$scope.problemTitle = response.name;
					$scope.problemDescription = response.body;
				});
			},
			solveIt: function(id){
				console.log(id);
				console.log($scope.languageId);
				codingService.setProblemCode(id);
				codingService.setIsEnableCode(true);
				$state.go('codingPage');
				
			},
			languageToC: function(){
				$scope.language = "C";
				$scope.languageId = 11;
				codingService.setLanguage(11);
			},
			languageToCpp: function(){
				$scope.language = "C++";
				$scope.languageId = 1;
				codingService.setLanguage(1);
			},
			languageToJava: function(){
				$scope.language = "Java";
				$scope.languageId = 10;
				codingService.setLanguage(10);
			}

		});

		// Activities
		$scope.languageToCpp();	
		$scope.getProblemCode();
	}]);

//# sourceMappingURL=controllers.js.map
