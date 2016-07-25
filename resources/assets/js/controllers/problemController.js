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
