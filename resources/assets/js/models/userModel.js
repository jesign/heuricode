myApp.factory('userModel', ['$http' , '$q', function($http, $q){

	return {
		getPlayerDetails: getPlayerDetails,
		getUserId: getUserId,
		checkAuth: checkAuth,
		checkVacantRoom: checkVacantRoom,
		getAllErrorsCount: getAllErrorsCount,
		getBattleRecords: getBattleRecords
	};

	function checkAuth(){
		return $http.get(baseUrl + 'checkAuth');
	}
	
	function checkVacantRoom(rooms){
		var d = $q.defer();
		if(rooms.length == 0){
			d.reject();
		}

		for(var x = 0; x < rooms.length; x ++){
			console.log("looking for vacant room");
			// check if vacant room
			if(rooms[x].player2 === 0){
				
				d.resolve({
					roomKey: rooms[x].$id
				})
			}				
		}
		
		d.reject();
		return d.promise;
	}
	function getUserId(){			
		return $http ({
			headers: {
				'Content-Type' : 'application/json'
			},
			url: baseUrl + 'userId',
			method: "POST"
		});
	}
	function getPlayerDetails(user_id){
		return $http ({
			headers: {
				'Content-Type': 'application/json'
			},
			url: baseUrl + 'getPlayerDetails',
			data: {
				user_id: user_id,
			},
			method: "POST"
		})
	}

	function getAllErrorsCount(e_id){
		return $http.get(baseUrl + 'getAllError/' + e_id);
	}

	function getBattleRecords(){
		return $http.get(baseUrl + 'getBattleRecords');
	}

}]);