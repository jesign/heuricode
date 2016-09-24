myApp.factory('badgeModel', ['$http', function($http){
	
	var model = {};

	model.getBadges = function(){
		return $http.get(baseUrl + 'getBadges');
	}
	model.getBadgeDetails = function(id){
		return $http.get(baseUrl + 'getBadgeDetails/' + id);
	}
	model.addBadge = function(id){
		return $http({
				headers:{
					'Content-Type' : 'application/json'
				},
				url: baseUrl + 'badges/add',
				method: "POST",
				data: {
					'badge_id' : id,
				}
			});
	}
	model.countSolved = function(diff, subj){
		return $http.get(baseUrl + 'countSolved/' + diff + '/' + subj);
	}
	// http://db4262da.compilers.sphere-engine.com/api/v3/languages?access_token=00c04ffac4d4ffe13d590b91b70ef3f2
	return model;

}]);