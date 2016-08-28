myApp.factory('userModel', ['$http' , '$q', function($http, $q){

	return {
		getPlayerDetails: getPlayerDetails,
		getUserId: getUserId,
		checkAuth: checkAuth,
		getMatchedUser: getMatchedUser,
		checkVacantRoom: checkVacantRoom,
		checkIfMatchingUser: checkIfMatchingUser
	};

	function checkAuth(){
		return $http.get(baseUrl + 'checkAuth');
	}

	function checkIfMatchingUser(player1){
		return $http ({
			headers: {
				'Content-Type' : 'application/json'
			},
			url: baseUrl + 'checkIfMatch', 
			data: {
				player1_id: player1
			},
			method: "POST"
		});
	}

	function checkVacantRoom(rooms, scs, rcs, arr){

		var d = $q.defer();

		if(rooms.length == 0){
			d.reject();			
		}

		for(var x = 0; x < rooms.length; x ++){
			console.log("looking for vacant room");
			// check if vacant room
			if(rooms[x].player2 == 0){
				console.log("checking if is a matching user");
				/* check if player 1 is a matching user */
				
				var p2_scs = rooms[x].level.scs;
				var p2_rcs = rooms[x].level.rcs;
				var p2_arr = rooms[x].level.arr;

				if(scs == p2_scs || Math.abs(scs - p2_scs) == 1){
					d.resolve({
						roomKey: rooms[x].$id,
						player_id: rooms[x].player1,
						subject: 1,
						level: p2_scs
					});
				}
				if(rcs == p2_rcs || Math.abs(rcs - p2_rcs) == 1){
					d.resolve({
						roomKey: rooms[x].$id,
						subject: 2,
						level: p2_rcs
					});
				}
				if(arr == p2_arr || Math.abs(arr - p2_arr) == 1){
					d.resolve({
						roomKey: rooms[x].$id,
						subject: 3,
						level: p2_arr
					});
				}
			}				
		}

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
	function getMatchedUser(online_users, except_users){
		return $http ({
			headers: {
				'Content-Type': 'application/json'
			},
			url: baseUrl + 'findMatch',
			data: {
				online_users,
				users: online_users,
				excepts: except_users
			},
			method: "POST"
		});
	}
	function getPlayerDetails(user_id,subj){
		return $http ({
			headers: {
				'Content-Type': 'application/json'
			},
			url: baseUrl + 'getPlayerDetails',
			data: {
				user_id: user_id,
				subject: subj
			},
			method: "POST"
		})
	}
}]);