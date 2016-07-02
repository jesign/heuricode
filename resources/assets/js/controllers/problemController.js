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
