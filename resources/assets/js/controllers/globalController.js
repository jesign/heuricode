myApp.controller('globalController', ['$scope', 'userModel', 'problemModel', 'rankService',
	function($scope, userModel, problemModel, rankService){

		angular.extend($scope,{
			rankSCS: null,
			rankRCS: null,
			rankARR: null
		});
		
		angular.extend($scope,{
			setRank: function(){
				problemModel.getWeaknessRank(1)
					.success(function(response){
						$scope.rankSCS = response;
						rankService.setRankSCS(response);
						console.log(response);
					});
				problemModel.getWeaknessRank(2)
					.success(function(response){
						$scope.rankRCS = response;
						rankService.setRankRCS(response);
						console.log(response);
				});
				problemModel.getWeaknessRank(3)
					.success(function(response){
						$scope.rankARR = response;
						rankService.setRankARR(response);
					console.log(response);
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
