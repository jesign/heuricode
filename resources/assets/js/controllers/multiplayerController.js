myApp.controller("multiplayerController",["$scope", "$rootScope", 
	"$firebaseArray", "userModel", "rankService", 
	function($scope, $rootScope, $firebaseArray, userModel, rankService) {
		
		$rootScope.$emit("GlobalToggleSidebar", {});

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

		$scope.hasRoom = false;
		$scope.hasOpponent = false;
		$scope.p1_btn = "disabled";
		$scope.p2_btn = "disabled";
		$scope.p1_name = 0;
		$scope.p2_name = 0;
		$scope.p1_level = 0;
		$scope.p2_level = 0;
		$scope.subject = "undecided";
	  	
	  	$scope.roomIndex = null;
		$scope.timerIndex = null;

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
	  				$scope.p1_btn = "active";

	  				setLevel(1, r.subject);
	  				setSubject(r.subject);

	  				createTimer();
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
				ready1: false,
				ready2: false,
				subject: 0,
				timerIdx: null,
				status: "waiting"
			}) .then(function(ref){
				roomKey = ref.key;
				roomId = true;
				$scope.roomIndex = $scope.rooms.$indexFor(roomKey);
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

		function waitRoomReady(){
			var r = $scope.rooms.$getRecord(roomKey);

			if(r.status != "in progress"){
				console.log("waiting for room to get ready");
				setTimeout(waitRoomReady, 1000);
				return;
			}
			$scope.hasRoom = true;
			$scope.hasOpponent = true;
			return;
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
							$scope.roomIndex = $scope.rooms.$indexFor(roomKey);
							console.log("Got a Room: " + response.roomKey)
							var edit = $scope.rooms.$getRecord(response.roomKey);

							edit.player2 = userId;
							edit.subject = response.subject;

							/* join a room */
							$scope.rooms.$save(edit).then(function(ref){
								console.log('You have joined a room');
							
								waitRoomReady();

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
								$scope.p2_btn = "active";
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
		$scope.test = function(){
			userModel.getPlayerDetails(1, 3, 1) 
					.success(function(response){
						console.log(response);
					});
		}

	  	$scope.timer = 0;
	  	function createTimer(){ 
	  		console.log("timer created");
	  		$scope.timers.$add({
	  			time: 120
	  		}).then(function(response){
	  				$scope.timerIndex = response.key;

	  				var r = $scope.rooms.$getRecord(roomKey);
	  				r.timerIdx = $scope.timers.$indexFor(response.key);
	  				r.status = "in progress";
	  				$scope.rooms.$save(r).then(function(res){
		  				startTimer();
		  				console.log("timer has started");
		  			});			
	  			});
	  	}
	  	function startTimer(){
	  		var r = $scope.rooms.$getRecord(roomKey);
	  		var t = $scope.timers.$getRecord($scope.timerIndex);

	  		if(!r.ready1 || !r.ready2){
	  			t.time = t.time - 1;

	  			console.log(t.time);
	  			$scope.timers.$save(t);		

	  			setTimeout(startTimer, 1000);
	  			return;
	  		}

	  		if(t.time == 0){
	  			alert("The game has started!");
	  		}

			t.time = 5;

  			console.log(t.time);
  			$scope.timers.$save(t).then(){

  			};	  		

	  		return;
	  	}

		$scope.ready1 = function(){
			var edit = $scope.rooms.$getRecord(roomKey);

			edit.ready1 = true;

			$scope.rooms.$save(edit).then(function(){
				console.log("player1 is ready");
			});
		}

		$scope.ready2 = function(){
			var edit = $scope.rooms.$getRecord(roomKey);

			edit.ready2 = true;

			$scope.rooms.$save(edit).then(function(){
				console.log("player2 is ready");				
			});
		}

	  	$scope.addMessage = function() {
		    $scope.messages.$add({
		      text: $scope.newMessageText
		    });
	  	}

	  	var is_able = true;

	  	$scope.$on('$stateChangeStart', function( event ) {
	  		is_able = false;	
		    
		    if(roomKey){
				$scope.rooms.$remove($scope.rooms.$indexFor(roomKey))
				.then(function(ref){
					console.log("Room was deleted");
				});
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
  			if(roomKey){
				$scope.rooms.$remove($scope.rooms.$indexFor(roomKey))
				.then(function(ref){
					console.log("Room was deleted");
				});
  			}
		});
		
}]); 