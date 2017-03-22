myApp.controller('badgeController', ['$scope', 'badgeModel',
	function($scope, badgeModel){
		
		var getBadges = function(){
			badgeModel.getBadges()
				.success(function(response){
					console.log(response);
					$scope.badges = response;
				});
		}
		getBadges();
	}]);