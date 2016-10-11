myApp.controller("multiplayerController",["$scope", "$state",
	"$firebaseArray", "userModel", "rankService", "problemModel", "codingService",
	function($scope, $state, $firebaseArray, userModel, rankService, 
		problemModel, codingService) {
		
		var refMessages = firebase.database().ref().child("messages");
		var refPlayer = firebase.database().ref().child("players");
		var refRoom = firebase.database().ref().child("rooms");
		var refTimer = firebase.database().ref().child("timers");
		// create a synchronized array
	  	$scope.messages = $firebaseArray(refMessages);
	  	$scope.players = $firebaseArray(refPlayer);
		$scope.rooms = $firebaseArray(refRoom);
		$scope.timers = $firebaseArray(refTimer);
		
	  	// Global Variable
	  	var roomKey = 0;
		var playerKey = 0;
		var userId = 0;
	  	var p1_id = 0;
	  	var p2_id = 0;
	  	var problemCode = null;
	  	var leaveState = false;

		$scope.hasRoom = false;
		$scope.hasOpponent = false;
		$scope.p1_btn = "disabled";
		$scope.p2_btn = "disabled";
		$scope.p1_name = 0;
		$scope.p2_name = 0;
	  	$scope.roomIndex = null;
		$scope.timerIndex = null;
		$scope.enableFindMatch = false;
		$scope.loadingFind = true;
		$scope.startTimer = false;
				
		$scope.roomDetails = "";
		$scope.loadProblemSuccess = false;

		userModel.getBattleRecords()
			.success(function(response){
				$scope.winsCount = response.wins;
				$scope.loseCount = response.lose;
				$scope.solvedCount = response.solved;
			});

		function setProblem(){
			problemModel.getProblem(problemCode)
					.success(function(response){
						$scope.loadProblemSuccess = false;
						codingService.setProblemDescription(response.body);
						$scope.problemDescription = response.body;
					})
					. error(function(response){
						$scope.loadProblemSuccess = false;
						$scope.problemTitle = "Failed to load problem.";
						setProblem();
					});
			problemModel.getProblemDetails(problemCode, 'multiplayer')
					.success(function(response){
						codingService.setTimeLimit(response.time_limit);
						var time = response.time_limit;
						var hr = parseInt((time / 60) / 60, 10);
						var min = parseInt((time / 60) % 60, 10);
						var sec = parseInt(time % 60, 10);
						
						$scope.difficulty = response.difficulty;
						$scope.time_limit = hr + "hr/s and " + min + "min/s"
					});
		}

	  	/* player1 creating a room - Step 1*/
		function createRoom(){
			console.log("creating room");
			$scope.rooms.$add({
				player1: userId,
				player2: 0,
				problemCode: null,
				ready1: false,
				ready2: false,
				lang1: "not set",
				lang2: "not set", 
				time: 5,
				status: 0,
				winner: 0,
				giveup: 0
			}) .then(function(ref){
				p1_id = userId;
				roomKey = ref.key;

				$scope.roomIndex = $scope.rooms.$indexFor(roomKey);
				$scope.hasRoom = true;

				checkOpponent();
				console.log("Room has created");

				userModel.getPlayerDetails(userId)
				.success(function(response){
					$scope.p1_name = response;
				});
			});
		}
		/*player1 checking for opponent - Step 2*/
		function checkOpponent(){
	  		var r = $scope.rooms.$getRecord(roomKey);
	  		if(!r.player2){
	  			$scope.roomDetails = "Waiting for an Opponent...";
	  			console.log('waiting for Opponent...');
	  			setTimeout(checkOpponent, 1000);
	  			return;
	  		}

	  		p2_id = r.player2;

	  		$scope.$apply(function(){
	  			userModel.getPlayerDetails(r.player2)
	  			.success(function(response){
	  				codingService.setOpponentName(response);
	  				$scope.p2_name = response;
	  				$scope.p1_btn = "active";
	  			
	  				getProblem();	
	  			});
	        });
	  		return;
	  	}
	  	/* player1 get problem for both players*/
	  	function getProblem(){
			problemModel.getPlayersProblem(p1_id, p2_id)
			.success(function(response){
				console.log(response);
				
				problemCode = response;
				codingService.setProblemCode(response)
  				setProblem();

				var r = $scope.rooms.$getRecord(roomKey);
				r.problemCode = response;
				r.status = 1;
				$scope.rooms.$save(r).then(function(){
					$scope.hasOpponent = true;
					$scope.roomDetails = "Waiting for Players to get ready ...";
	  				waitPlayerReady();
	  				console.log("waiting for players");
	  			});
			})
			.error(function(){
				$scope.alert_title = "Oops!";
				$scope.alert_description = "There was an error fetching a problem. Please refresh the page..";
				$('#alertModal').openModal();
			});
	  	}

	  	/* player1 wait for players to get ready - Step 4*/
	  	function waitPlayerReady(){
	  		var r = $scope.rooms.$getRecord(roomKey);

	  		if(!r.ready1 || !r.ready2){

	  			setTimeout(waitPlayerReady, 1000);
	  			return;
	  		}

	  		$scope.startTimer = true;
  			startTimer();
	  		return;
	  	}

	  	/* player1 start the timer and set
			to 2 after 5 seconds 			- Step 5a */ 

	  	function startTimer(){
	  		var r = $scope.rooms.$getRecord(roomKey);

	  		if(r.time != 0){
		  		r.time = r.time - 1;

	  			$scope.rooms.$save(r);

	  			setTimeout(startTimer, 1000);
	  			return;
	  		}

  			r.status = 2;
  			$scope.rooms.$save(r);
			leaveState = true;
			codingService.setIsEnableCode(true);
			codingService.setIsMultiplayer(true);
			codingService.setRoomKey(roomKey);
			$state.go('codingPage');
  			return;
	  	}

		/* player2 wait for the room status to turn to 1 - Step 2*/
		function waitRoomReady(){
			$scope.roomDetails = "Waiting for Room to get Ready... ";

			var r = $scope.rooms.$getRecord(roomKey);

			if(r.status == 0){
				console.log("waiting for room to get ready");
				setTimeout(waitRoomReady, 1000);
				return;
			}
			problemCode = r.problemCode;
			console.log("room available");
			codingService.setProblemCode(problemCode);
			setProblem();
			$scope.$apply(function(){
				$scope.hasOpponent = true;
			});

			waitGameStart();
			return;
		}

		/* player 2 wait for the game to start
	  		or wait for the room status to turn to 2 - Step 3*/
		function waitGameStart(){
			$scope.roomDetails = "Waiting for Players to get ready ...";
			var r = $scope.rooms.$getRecord(roomKey);

			if(r.ready1 && r.ready2){
				$scope.startTimer = true;
	  		}

			if(r.status != 2){
				setTimeout(waitGameStart, 1000);
				return;
			}	
			
			leaveState = true;
			
			codingService.setIsEnableCode(true);
			codingService.setIsMultiplayer(true);
			codingService.setRoomKey(roomKey);
			$state.go('codingPage');	
			return;
		}

		$scope.findMatch = function(){
			$scope.enableFindMatch = false;
			userModel.checkVacantRoom($scope.rooms)
						.then(function(response){
							roomKey = response.roomKey;
							$scope.roomIndex = $scope.rooms.$indexFor(roomKey);
							console.log("Got a Room: " + response.roomKey)
							var edit = $scope.rooms.$getRecord(response.roomKey);

							edit.player2 = userId;
							// edit.subject = response.subject;
							p1_id = edit.player1;
							p2_id = userId;

							setTimeout(function(){
									if($scope.hasOpponent == false){
										$scope.alert_title = "Oops!";
										$scope.alert_description = "The rooom has expired.. please refresh the page..";
										$('#alertModal').openModal();
									}
								}, 10000);

							/* player 2 joined a room - Step 1*/
							$scope.rooms.$save(edit).then(function(ref){
								console.log('You have joined a room');
								$scope.hasRoom = true;
								waitRoomReady();

								var r = $scope.rooms.$getRecord(ref.key);

								userModel.getPlayerDetails(r.player1)
								.success(function(response){
									console.log(response);
									$scope.p1_name = response;
									codingService.setOpponentName(response);
								});			

								userModel.getPlayerDetails(userId)
								.success(function(response){
									console.log(response);
									$scope.p2_name = response;
								});			
								
								$scope.p2_btn = "active";
							});		
						})
						.catch(function(response){
							console.log("No room yet.")
							createRoom();
						});
		}
		/* load authenticated user and check for vancant room.*/
		userModel.getUserId()
			.success(function(response){
				userId = response;
				$scope.rooms.$loaded() 
				.then(function(room){
				/* look for vacant room*/
					$scope.loadingFind = false;
					$scope.enableFindMatch = true;
				});		
			});

		$scope.ready1 = function(){
			if(p1_id == userId){
				var edit = $scope.rooms.$getRecord(roomKey);
				if(edit.lang1 != "not set"){
					edit.ready1 = true;
					$scope.rooms.$save(edit).then(function(){
						console.log("player1 is ready");
					});				
				}else{
					$scope.alert_title = "Oops!";
					$scope.alert_description = "Language not set.";
					$('#alertModal').openModal();
				}
			}
		}

		/* Ready buttons */
		$scope.ready2 = function(){
			if(p2_id == userId){
				var edit = $scope.rooms.$getRecord(roomKey);
				if(edit.lang2 != "not set"){
					edit.ready2 = true;
					$scope.rooms.$save(edit).then(function(){
						console.log("player2 is ready");				
					});
				}else {
					$scope.alert_title = "Oops!";
					$scope.alert_description = "Language not set.";
					$('#alertModal').openModal();
				}
			}
		}

		/* Player1 dropdown button - choose language */
		$scope.p1_switchLanguage = function(l_code){
			if(p1_id == userId){
				var edit = $scope.rooms.$getRecord(roomKey);
				if(l_code == 11){
					edit.lang1 = "C";
				} else if(l_code == 1){
					edit.lang1 = "C++";
				} else if(l_code == 10){
					edit.lang1 = "Java";
				}

				codingService.setLanguage(l_code);

				$scope.rooms.$save(edit).then(function(){
					console.log("player2 is ready");				
				});
			}else{
				$scope.alert_title = "Oops!";
				$scope.alert_description = "you cannot set language from other player.";
				$('#alertModal').openModal();
			}
			
		}
		/* Player2 dropdown button - choose language */
		$scope.p2_switchLanguage = function(l_code){
			if(p2_id == userId){
				var edit = $scope.rooms.$getRecord(roomKey);
				if(l_code == 11){
					edit.lang2 = "C";
				} else if(l_code == 1){
					edit.lang2 = "C++";
				} else if(l_code == 10){
					edit.lang2 = "Java";
				}

				codingService.setLanguage(l_code);

				$scope.rooms.$save(edit).then(function(){
					console.log("player2 is ready");				
				});
			}else{
				$scope.alert_title = "Oops!";
				$scope.alert_description = "you cannot set language from other player.";
				$('#alertModal').openModal();
			}
		}

	  	$scope.addMessage = function() {
		    $scope.messages.$add({
		      text: $scope.newMessageText
		    });
	  	}

	  	var is_able = true;

	  	$scope.$on('$stateChangeStart', function( event ) {
	  		is_able = false;	
		    
		    if(!leaveState){
			    if(roomKey){
					$scope.rooms.$remove($scope.rooms.$indexFor(roomKey))
					.then(function(ref){
						console.log("Room was deleted");
					});
	  			}
		    }
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
  			if(roomKey && !leaveState){
				$scope.rooms.$remove($scope.rooms.$indexFor(roomKey))
				.then(function(ref){
					console.log("Room was deleted");
				});
  			}
		});
		
}]); 

/*
	Room status
		0 = waiting for player2
		1 = waiting for player1 respond
		2 = game has started
		3 = game finished


*/