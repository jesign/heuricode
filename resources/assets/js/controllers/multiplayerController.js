myApp.controller("multiplayerController",["$scope", "$rootScope", 
	"$firebaseArray", "userModel", "rankService", 
	function($scope, $rootScope, $firebaseArray, userModel, rankService) {
		
		$rootScope.$emit("GlobalToggleSidebar", {});

		var refMessages = firebase.database().ref().child("messages");
		var refPlayer = firebase.database().ref().child("players");
		var refRoom = firebase.database().ref().child("rooms");
		// create a synchronized array
	  	$scope.messages = $firebaseArray(refMessages);
	  	$scope.players = $firebaseArray(refPlayer);
		$scope.rooms = $firebaseArray(refRoom);
		
		// Scope Variable
	 //  	angular.extend($scope, {
	 //  		foundMatch: false,
	 //  		p1_name: null,
	 //  		p2_name: null,
	 //  		p1_level: null,
	 //  		p2_level: null,
	 //  		p1_isReady: false,
	 //  		p2_isReady: false
		// });
			  	
	  	// Global Variable
	  	var roomKey = 0;
		var playerKey = 0;
		var userId = 0;
		$scope.hasRoom = false;
		$scope.hasOpponent = false;
		$scope.p1_name = 0;
		$scope.p2_name = 0;
		$scope.p1_level = 0;
		$scope.p2_level = 0;
		$scope.p1_ready = false;
		$scope.p2_ready = false;
		$scope.subject = "undecided";
		// var onlineUsers = [];
		// var excepted_users = [];
		// var roomKey;
		// var player1 = 0, player2 = 0;
		
		function setLevel(player, subj){
			var lvl;
			switch(subj){
				case 1: 
					lvl = rankService.getRankSCS();;
					break;
				case 2: 
					lvl = rankService.getRankRCS();;
					break;
				case 3:
					lvl = rankService.getRankARR();;
					break;
			}
			if(player === 1){
				$scope.p1_level = lvl;
			}else{
				$scope.p2_level = lvl;
			}
		}

		function setSubject(subj){
			switch(subj){
	  					case 1: 
	  						$scope.subject = "Selection Control Structure";
	  						break;
	  					case 2:
	  						$scope.subject = "Repetition Control Structure";
	  						break;
	  					case 3: 
	  						$scope.subject = "Array";
	  						break;
	  					default: 
	  				}
		}
		function checkOpponent(){
	  		var r = $scope.rooms.$getRecord(roomKey);
	  		if(!r.player2){
	  			console.log('waiting for Opponent...');
	  			setTimeout(checkOpponent, 1000);
	  			return;
	  		}

	  		$scope.$apply(function(){
	  			$scope.hasOpponent = true;
	  			userModel.getPlayerDetails(r.player2, r.subject)
	  			.success(function(response){
	  				$scope.p2_name = response[0];
	  				$scope.p2_level = response[1];

	  				setLevel(1, r.subject);
	  				setSubject(r.subject);
	  			});
	        });
	  		return;
	  	}

		function createRoom(){
			var scs = rankService.getRankSCS();
			var rcs = rankService.getRankRCS();
			var arr = rankService.getRankARR();
			
			console.log("creating room");
			$scope.rooms.$add({
				player1: userId,
				player2: 0,
				level: {
					scc: scs,
					rcs: rcs,
					arr: arr
				},
				subject: 0,
				status: "waiting"
			}) .then(function(ref){
				roomKey = ref.key;
				roomId = true;
				$scope.hasRoom = true;
				checkOpponent();
				console.log("Room has created");

				userModel.getPlayerDetails(userId, 1)
				.success(function(response){
					console.log(response);
					$scope.p1_name = response[0];
					$scope.p1_level = 0;

				});

			});
		}

		userModel.getUserId()
			.success(function(response){
				userId = response;
				$scope.rooms.$loaded() .then(function(room){
				/* look for vacant room*/
					console.log("Checking Vacant Room");

					var scs = rankService.getRankSCS();
					var rcs = rankService.getRankRCS();
					var arr = rankService.getRankARR();

					var roomId = false;
					userModel.checkVacantRoom(room, scs, rcs, arr)
						.then(function(response){
							roomKey = response.roomKey;
							console.log("Got a Room: " + response.roomKey)
							var edit = $scope.rooms.$getRecord(response.roomKey);

							edit.player2 = userId;
							edit.status = "in progress";
							edit.subject = response.subject;
							$scope.rooms.$save(edit).then(function(ref){
								console.log('You have join a room');
								$scope.hasRoom = true;
								$scope.hasOpponent = true;
								
								var r = $scope.rooms.$getRecord(ref.key);

								userModel.getPlayerDetails(r.player1, r.subject)
								.success(function(response){
									console.log(response);
									$scope.p1_name = response[0];
									$scope.p1_level = response[1];
								});			

								userModel.getPlayerDetails(userId, r.subject)
								.success(function(response){
									console.log(response);
									$scope.p2_name = response[0];
									$scope.p2_level = response[1];
								});			
								setSubject(r.subject);
							});		
							roomId = true;

						})
						.catch(function(response){
							roomId = true;
							console.log("No room yet.")
							createRoom();
						});

						setTimeout(function(){
							if(!roomId){
								console.log("there is no matching player..")
								createRoom();
							}
						}, 20000);
				});		

			});

		

		// $scope.players.$loaded() .then(function(pl){
		// 	console.log(pl);
		// 	var player_array = pl;

		// 	// get authenticated user id
		// 	userModel.getUserId()
		// 	.success(function(response){
		// 		userId = response;
		// 		var foundUser = false;

		// 		/*check if user already exists.
		// 		pushes all online users at the same time.*/
		// 		for(var x = 0; x < pl.length; x++){
		// 			onlineUsers.push(player_array[x].user_id);
		// 			if(userId == player_array[x].user_id){
		// 				playerKey = player_array[x].$id;
		// 				foundUser = true;
		// 			}
		// 		}
		// 		// add block of codes to push 
		// 		// the excluded users here...

		// 		// excepted_users.push("3");
		// 		// add user if doesn't exist
		// 		if(!foundUser){
		// 			$scope.players.$add({
		// 				user_id: userId,
		// 				available: true,
		// 				expire: 0,	
		// 				roomKey: null
		// 			}).then(function(ref){
		// 				playerKey = ref.key; 
		// 				console.log(playerKey);	

		// 				// getMatchedUser(onlineUsers,excepted_users);
		// 			});	
		// 		} 
		// 		// else{
		// 		// 	getMatchedUser(onlineUsers,excepted_users);
		// 		// }

		// 		checkRooms();
	 //  		});	  
		// });

	 //  	function checkRoom(){
	 //  		var rk = $scope.players.$getRecord(playerKey).roomKey;
	 //  		if(!rk){
	 //  			console.log('checking room');
	 //  			setTimeout(checkRoom, 1000);
	 //  			return;
	 //  		}
	 //  		$scope.$apply(function(){
	 //  			$scope.foundMatch = true;
	 //  			setPlayersDetails();
	 //        });
	 //  		return;
	 //  	}
		

		// // get matched user.

		// var setPlayersDetails = function(){
		// 	roomKey = $scope.players.$getRecord(playerKey).roomKey;
		// 	var r = rooms.$indexFor(roomKey);
		// 	console.log(rooms[r]);
		// 	player1 = rooms[r].player1;
		// 	player2 = rooms[r].player2;

		// 	userModel.getPlayerDetails(player1, player2, rooms[r].subject) 
		// 			.success(function(response){
		// 				console.log(response);
		// 				$scope.p1_name = response[0][0];
		// 				$scope.p1_level = response[0][1];

		// 				$scope.p2_name = response[1][0];
		// 				$scope.p2_level = response[1][1];
		// 			});
		// }

		// var getMatchedUser = function(users, except_users){
		// 	checkRoom();

		// 	userModel.getMatchedUser(users, except_users)
		// 		.success(function(response){
					
		// 			console.log(response);
		// 			var match=ed_user_id = response[0];
		// 			console.log(matched_user_id);
		// 			// if found matching user
		// 			if(response[0] != 0){
		// 				// add room
		// 				rooms.$add({
		// 					player1: userId,
		// 					player2: matched_user_id,
		// 					ready1: false,
		// 					ready2: false,
		// 					subject: response[1],
		// 					time: 360
		// 				}). then(function(ref){
		// 					roomKey = ref.key;
							
		// 					for(var x = 0; x< $scope.players.length; x++){
		// 						console.log($scope.players[x].user_id);
		// 						if(matched_user_id == $scope.players[x].user_id){
									
		// 							matchedKey = $scope.players.$keyAt(x);

		// 							var edit = $scope.players.$getRecord(matchedKey);

		// 							edit.roomKey = roomKey;
		// 							$scope.players.$save(edit).then(function(){
		// 								console.log('updated');
		// 							});
		// 						}
		// 					}			
							
		// 					var edit = $scope.players.$getRecord(playerKey);

		// 					edit.roomKey = roomKey;
		// 					$scope.players.$save(edit).then(function(){
		// 						console.log('updated');
		// 					});
		// 				});
		// 			}
		// 		});
		// }


/*		$scope.ready1 = function(){
			if(userId == player1){
				// able to change ready status

				var edit = $scope.rooms.$getRecord(roomKey);
				edit.ready1 = edit.ready1 == true ? false : true;
				$scope.rooms.$save(edit).then(function(){
					if(edit.ready1){

					}
				});

				var edit = $scope.players.$getRecord(playerKey);

				edit.roomKey = roomKey;
				$scope.players.$save(edit).then(function(){
					console.log('updated');
				});


			}
		}
		$scope.ready2 = function(){

		}
*/
		$scope.test = function(){
			userModel.getPlayerDetails(1, 3, 1) 
					.success(function(response){
						console.log(response);
					});

					// this is how to edit data from firebase
				// var edit = $scope.players.$getRecord(playerKey);

				// edit.roomKey = "22";
				// $scope.players.$save(edit).then(function(){
				// 	console.log('updated');
				// });
		}

		

	  	$scope.addMessage = function() {
		    $scope.messages.$add({
		      text: $scope.newMessageText
		    });
	  	};

	  	var is_able = true;
	  	$scope.$on('$stateChangeStart', function( event ) {
	  		$scope.players.$remove($scope.players.$indexFor(playerKey));
	  		is_able = false;	
		    console.log('deleted');
		});

		window.onbeforeunload = function() { 
	  		if(is_able){
			      if(confirm('are you sure to exit?')) {
           			return true; 
			      }
			      else {
			        return false; 
			      }
		  	}
		};	  		

		$(window).on('unload', function(e) {
      		$scope.players.$remove($scope.players.$indexFor(playerKey))
  			.then(function(ref) {
  				alert("removed");
			  	ref.key() === item.$id; // true
			});
		});
		
}]); 