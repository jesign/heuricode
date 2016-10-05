myApp.controller('globalController', ['$scope', 'userModel', 'problemModel', 'rankService',
	function($scope, userModel, problemModel, rankService){

		angular.extend($scope,{
			rankSCS: null,
			rankRCS: null,
			rankARR: null,
			averager: false
		});
		
		angular.extend($scope,{
			setRank: function(){
				problemModel.getWeaknessRank(1)
					.success(function(response){
						$scope.rankSCS = response[0];
						$scope.rankRCS = response[1];
						$scope.rankARR = response[2];
						
						rankService.setRankSCS(response[0]);
						rankService.setRankRCS(response[1]);
						rankService.setRankARR(response[2]);

						if($scope.rankSCS >= 11 && $scope.rankRCS >= 11){
							$scope.averager = true;
						}else{
							$scope.averager = false;
						}
						console.log($scope.rankSCS + " " + $scope.rankRCS + " " + $scope.rankARR);
					});
			}
		});

		userModel.checkAuth()
			.success(function(response){
				if(response == 1){
					$scope.setRank();	
				}
			});

	}]);
