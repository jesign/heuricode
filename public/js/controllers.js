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

myApp.controller('codeController', ['$scope', 'codeModel', 'problemModel',
	function($scope, codeModel, problemModel){


		problemModel.getProblem().success(function(response){
			$scope.problemTitle = response.problem_title;
			$scope.problemDescription = response.problem_description;
			$scope.newCode.codes = response.code_cpp;
			
			var sc = $scope.newCode.codes;
		    var editor = ace.edit("editor");
		    editor.setTheme("ace/theme/monokai");
		    editor.getSession().setValue(sc);
		    editor.resize();
		});
		// variables
		angular.extend($scope, {
			codeLanguage: "C++",
			newCode: {
				codes: null,
				langId: 1,
			}, 
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

			problemTitle: null,
			problemDescription: null,
			problemCodeCpp: null,
			problemCodeJava: null
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
				codeModel.submissionStatusModel(id).success(function(response){
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
				  data: {
				 		sourceCode: code,
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
				console.log($scope.showProblem);
				$scope.showProblem = $scope.showProblem === false ? true: false;
			},
			testError: function(){
				$scope.getSubmissionStatus(47872263);
			},
			testSuccess: function(){
				$scope.getSubmissionStatus(47900843);
			},
			
			
			
		});
	}]);
myApp.controller('problemController', ['$scope','problemModel',
	function($scope, problemModel){
		// variables
		problemModel.getProblem().success(function(response){
			$scope.problemTitle = response.problem_title;
			$scope.problemDescription = response.problem_description;
			console.log(response.problem_title);
		});

		angular.extend($scope, {
			problemTitle: null,
			problemDescription: null
		});

		// functions
		angular.extend($scope,{
			getProblem: function(){
					problemModel.getProblem().success(function(response){
						$scope.problemTitle = response.problem_title;
						$scope.problemDescription = response.problem_description;
						console.log(response.problem_title);
					});
			}
		});

	}]);

//# sourceMappingURL=controllers.js.map
