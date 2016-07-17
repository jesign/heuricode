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
