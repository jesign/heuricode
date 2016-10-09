myApp.controller('globalController', ['$scope', 'userModel', 'problemModel', 'rankService',
	function($scope, userModel, problemModel, rankService){

		angular.extend($scope,{
			rankSCS: null,
			rankRCS: null,
			rankARR: null,
			averager: false,
			competent: false
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

						if($scope.rankSCS >= 25 && $scope.rankRCS >= 25 && $scope.rankARR >= 25){
							$scope.competent = true;
						}else{
							$scope.competent = false;
						}
						if($scope.rankSCS >= 11 && $scope.rankRCS >= 11 && $scope.rankARR >= 11){
							$scope.averager = true;
						}else{
							$scope.averager = false;
						}
						console.log($scope.competent + "  " + $scope.averager);
						console.log($scope.rankSCS + " " + $scope.rankRCS + " " + $scope.rankARR);
					});
			}
		});

		$scope.setRank();	

	}]);
