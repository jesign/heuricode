myApp.controller('problemController', ['$scope','problemModel', '$location',
	function($scope, problemModel, $location){

		// variables
		angular.extend($scope, {
			problemCode: null,
		});
 	
		// functions
		angular.extend($scope,{
			getProblemCode: function(){
				$scope.problemCode = 'TEST_123';
				$scope.getProblem($scope.problemCode);
			},
			getProblem: function(problemCode){
				problemModel.getProblem(problemCode).success(function(response){
					$scope.problemTitle = response.name;
					$scope.problemDescription = response.body;
				});
			},
			solveIt: function(id){
				$location.path('/coding/' + id);
			}

		});

		// Activities
		$scope.getProblemCode();
	}]);
