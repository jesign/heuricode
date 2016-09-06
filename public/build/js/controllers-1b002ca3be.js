myApp.controller("multiplayerController",["$scope", "$rootScope", "$state",
	"$firebaseArray", "userModel", "rankService", "problemModel", "codingService",
	function($scope, $rootScope, $state, $firebaseArray, userModel, rankService, 
		problemModel, codingService) {
		
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
	  	var problemIsSet = false;
	  	var p1_id = 0;
	  	var p2_id = 0;
	  	var subj_id = 0;
	  	var problemCode = null;
	  	var leaveState = false;

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

		$scope.loadProblemSuccess = false;

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

		function setProblem(){
			problemModel.getProblem(problemCode)
					.success(function(response){
						$scope.loadProblemSuccess = false;
						$scope.problemTitle = response.name;
						$scope.problemDescription = response.body;
					})
					. error(function(response){
						$scope.loadProblemSuccess = false;
						$scope.problemTitle = "Failed to load problem.";
					});
			problemModel.getProblemDetails(problemCode)
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
				problemCode: null,
				ready1: false,
				ready2: false,
				lang1: "not set",
				lang2: "not set", 
				subject: 0,
				time: 5,
				status: 0,
				winner: 0
			}) .then(function(ref){
				p1_id = userId;
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
		/*player1 checking for opponent - Step 2*/
		function checkOpponent(){
	  		var r = $scope.rooms.$getRecord(roomKey);
	  		if(!r.player2){
	  			console.log('waiting for Opponent...');
	  			setTimeout(checkOpponent, 1000);
	  			return;
	  		}

	  		p2_id = r.player2;
	  		subj_id = r.subject;

	  		$scope.$apply(function(){
	  			userModel.getPlayerDetails(r.player2, r.subject)
	  			.success(function(response){
	  				$scope.p2_name = response[0];
	  				$scope.p2_level = response[1];
	  				$scope.p1_btn = "active";
	  				
	  				setLevel(1, r.subject);
	  				setSubject(r.subject);
	  				getProblem();
	  				
	  			});
	        });
	  		return;
	  	}
	  	/* player1 get suitable problems for the 2 players*/
	  	function getProblem(){
			problemModel.getPlayersProblem(p1_id, p2_id, subj_id)
			.success(function(response){
				console.log(response);
				if(response != 0){
					problemCode = response;
					codingService.setProblemCode(response)
					problemIsSet = true;

					var r = $scope.rooms.$getRecord(roomKey);
					r.problemCode = response;
					$scope.rooms.$save(r);


					console.log("Problem has set.");
					updateRoomStatus();
				}else{
					alert('There is no more problem to fetch');
				}
			})
			.error(function(){
				alert('There was an error fetching a problem');
			});
	  	}

	  	/* player1 update room status to 1 - Step 3*/
	  	function updateRoomStatus(){ 
			var r = $scope.rooms.$getRecord(roomKey);
			r.status = 1;
  			setProblem();

			$scope.rooms.$save(r).then(function(res){
				$scope.hasOpponent = true;
  				waitPlayerReady();
  				console.log("waiting for players");
  			});			
		
	  	}

	  	/* player1 wait for players to get ready - Step 4*/
	  	function waitPlayerReady(){
	  		var r = $scope.rooms.$getRecord(roomKey);

	  		if(!r.ready1 || !r.ready2){

	  			setTimeout(waitPlayerReady, 1000);
	  			return;
	  		}
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
			codingService.setWeaknessId(subj_id);
			codingService.setIsEnableCode(true);
			codingService.setIsMultiplayer(true);
			codingService.setRoomKey(roomKey);
			$state.go('codingPage');
		
  			return;

	  	}
	  	

		/* player2 wait for the room status to turn to 1 - Step 2*/
		function waitRoomReady(){
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
			var r = $scope.rooms.$getRecord(roomKey);

			if(r.status != 2){
				setTimeout(waitGameStart, 1000);
				return;
			}	
			
			leaveState = true;
			codingService.setWeaknessId(subj_id);
			codingService.setIsEnableCode(true);
			codingService.setIsMultiplayer(true);
			codingService.setRoomKey(roomKey);
			$state.go('codingPage');	

			return;
		}

		/* load authenticated user and check for vancant room.*/
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

							p1_id = edit.player1;
							p2_id = userId;

							setTimeout(function(){
									if($scope.hasOpponent == false){
										alert("The rooom has expired.. please refresh the page..");
									}
								}, 10000);

							/* player 2 joined a room - Step 1*/
							$scope.rooms.$save(edit).then(function(ref){
								console.log('You have joined a room');
								$scope.hasRoom = true;
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
							console.log("No room yet.")
							createRoom();
						});
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
					alert("language not set");
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
					alert("language not set");
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
				alert("you cannot set language from other player.")
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
				alert("you cannot set language from other player.")
			}
		}

		$scope.test = function(){
			userModel.getPlayerDetails(1, 3, 1) 
					.success(function(response){
						console.log(response);
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
  			if(roomKey){
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
						$scope.rankSCS = response[0];
						$scope.rankRCS = response[1];
						$scope.rankARR = response[2];
						
						rankService.setRankSCS(response[0]);
						rankService.setRankRCS(response[1]);
						rankService.setRankARR(response[2]);

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

myApp.controller('userController', ['$scope', 
	function($scope){


		//function
		angular.extend($scope, {
			testFunction: function(){
				alert('Yeah');
			},

		});

	}]);
myApp.controller('navController', ['$scope', '$rootScope',
	function($scope, $rootScope){

		$rootScope.$on("GlobalToggleSidebar", function(){
           $scope.hideSidebar();
        });

		// variables
		angular.extend($scope, {
			showNav: true
		}); 
		
		// functions
		angular.extend($scope, {

			toggleSidebar: function(){
				console.log('toggled');
				var sidebar = $("#sidebar-wrapper");
				var content = $("#page-content-wrapper");
				if(sidebar.hasClass("open")){
					sidebar.css('-webkit-transform', 'translate(-98%,0');
					content.css('padding-left', "0%");
				}else{
					sidebar.css('-webkit-transform', 'translate(0,0');	
					content.css('padding-left', "260px");
				}
				sidebar.toggleClass("open");
			},
			hideSidebar: function(){
				
				var sidebar = $("#sidebar-wrapper");
				var content = $("#page-content-wrapper");

				sidebar.css('-webkit-transform', 'translate(-98%,0');
				content.css('padding-left', "0%");
			},
			
		});
	}]);

myApp.controller('codeController', ['$scope','$rootScope', 
		'codeModel', 'problemModel', 'codingService', '$state',
		'errorService', 'rankService', 'userModel', '$firebaseArray',
	function($scope,$rootScope, codeModel, problemModel, codingService,
		$state, errorService, rankService, userModel, $firebaseArray){

		// global variables
		var g_languageId = null,
			g_statusId = null,
			g_submitId = null,
			g_array_errors = [],
			round = 0, 
			roomKey = null,
			userId = 0,
			leaveState = false,
			isLose = false;

		// scoped variables
		angular.extend($scope, {
			newCode: {
				codes: null,
				input: null
			}, 
			error: null,
			showOutput: false,
			showProblem: true,
			compiling: true,
			result: null,
			resultValue: null,
			time: null,
			memory: null,
			signal: null,

			problemCode: null,
			problemTitle: null,
			problemDescription: null,
			isCorrect : false,
			
			submitCodeId: null,
			submitStatusDescription: null,
			checkingResult: false,
			resultSubmissionColor: null,
			
			isMultiplayer:false,
			
			// temporary
			errors: {
				ms: 0,
				se: 0,
				pm: 0,
				ee: 0,
				re: 0				
			}
		}); 	

		 
		// functions
		angular.extend($scope, {
			getResultValue: function(id){
				switch(id){
					case 11: 
						return "Compilation Error";
					break;
					case 12:
						return "Runtime Error";
					break;
					case 13:
						return "Time limit Exceeded";
					break;
					case 15: 
						return "Success";
					break;
					case 17: 
						return "Memory Limit Exceeded";
					break;
					case 19:
						return "Illegal System Call";
					break;
					case 20:
						return "Internal Error";
					break;
					default: 
						return 0;
				}
			},
			getSubmissionStatus: function(id){				
				$('.nav-tabs a[href="#output"]').tab('show');
				codeModel.submissionStatusModel(id).then(function(response){
					$scope.output = "";
					$scope.error = "";

					$scope.showOutput = true;
					console.log(response);
					$scope.showProblem = true;
					var status_id = response.status;
					console.log(status_id);
		  			if(status_id != 0){
		  				$scope.compiling = true;
		  				if(status_id < 0)
		  					$scope.status = "Waiting for compilation...";
		  				else if(status_id == 1)
		  					$scope.status = "Compilation...";
		  				else if(status_id == 3)
		  					$scope.status = "Running...";
		  				$scope.getSubmissionStatus(g_submitId);
		  			}else{
		  				$scope.status = "";
		  				$scope.compiling = false;
		  				
		  				$scope.time = response.time;
		  				$scope.memory = response.memory;
		  				$scope.signal - response.signal;
		  			}

		  			$scope.resultValue = $scope.getResultValue(response.result);
		  			console.log(response.result);
		  			console.log($scope.getResultValue(response.result));
		  			
	  			
		  			if(response.result == 15){
		  				$scope.resultValueColor = "resultValSuccess";
		  				$scope.output = response.output;
		  			}else if(response.result == 12){
		  				errorService.addErrorCountRE(1);
		  			}else{
		  				$scope.resultValueColor = "resultValError";
		  				$scope.error = response.cmpinfo;

		  				switch(g_languageId){
							case 1: //C++
								g_array_errors = $scope.error.split("prog.cpp:");
								break;
							case 11: // C
								g_array_errors = $scope.error.split("prog.c:");
								break;
							case 10: // Java
								g_array_errors = $scope.error.split("Main.java:");
								break; 
						}

		  				errorService.setErrors(g_array_errors);
		  				
		  				$scope.getErrorsMS();
						$scope.getErrorsSE();
						$scope.getErrorsPM();
						$scope.getErrorsEE();


						// temporary display error counts
						$scope.errors.ms = errorService.getErrorCountMS();
						$scope.errors.se = errorService.getErrorCountSE();
						$scope.errors.pm = errorService.getErrorCountPM();
						$scope.errors.ee = errorService.getErrorCountEE();
						$scope.errors.re = errorService.getErrorCountRE();
		  			}
	  			

				});
			},
			runCode: function(editorForm){
				var editor = ace.edit("editor");
				var code = editor.getValue();
				console.log("code " + code);
				$.ajax({
				  	type: "POST",
				  	url: 'http://db4262da.compilers.sphere-engine.com/api/v3/submissions?access_token=00c04ffac4d4ffe13d590b91b70ef3f2',
				  	// contentType: 'application/json',
				  	data: 
				  		// JSON.stringify(
				  		{
				 		sourceCode: code,
				 		language: g_languageId,
				 		input: $scope.newCode.input
				 	}
					 	// )
					,
				  	success: function(result, data){
				  		var obj = JSON.parse(result);
					  	g_submitId = obj.id;
				  		console.log(obj.id);
		  				$scope.getSubmissionStatus(g_submitId);
				  	}
				});
			},
			testError: function(){			
				
				$scope.getSubmissionStatus(47872263);
			
			},
			testSuccess: function(){
				$scope.getSubmissionStatus(47900843);
			},
			testing1: function(){
				$scope.getSubmissionStatus(48791363);
			},
			testing2: function(){
				$scope.getSubmissionStatus(48791371);
			},
			testing3: function(){
				$scope.getSubmissionStatus(47900843);
			},
			getErrorsMS: function(){
				var array_error = g_array_errors;
				var number_of_errors = 0;
				switch(g_languageId){
					case 1:
						for(i = 0; i < array_error.length; i ++){
							var str = array_error[i];
								if(str.includes("expected ';' before")){
									number_of_errors ++;
								} 
						}
						errorService.addErrorCountMS(number_of_errors);		 
						break;
					case 10:
						break;
					case 11:
				}
				
			},
			getErrorsSE: function(){
				
				var array_error = g_array_errors;
				var number_of_errors = 0;

				switch(g_languageId){
					case 1:
						for(i = 0; i < array_error.length; i ++){
							var str = array_error[i];
							if(str.includes("was not declared in this scope")){
								number_of_errors ++;
							} 
						}
						errorService.addErrorCountSE(number_of_errors);		 
						break;
					case 10:
						
						break;
					case 11:
				}
			},
			getErrorsPM: function(){
				var array_error = g_array_errors;
				var number_of_errors = 0;

				switch(g_languageId){
					case 1:
						for(i = 0; i < array_error.length; i ++){
							var str = array_error[i];
							if(str.includes("expected ')'")){
								number_of_errors ++;
							} else if(str.includes("expected ']'")){
								number_of_errors ++;
							} else if(str.includes("expected '}'")){
								number_of_errors ++;
							} else if(str.includes("expected '('")){
								number_of_errors ++;
							} else if(str.includes("expected '{'")){
								number_of_errors ++;
							}else if(str.includes("expected '['")){
								number_of_errors ++;
							} 
						}
						errorService.addErrorCountPM(number_of_errors);		 
						break;
					case 10:
						
						break;
					case 11:
				}					
			},
			getErrorsEE: function(){
				var array_error = g_array_errors;
				var number_of_errors = 0;
				switch(g_languageId){
					case 1:
						for(i = 0; i < array_error.length; i ++){
							var str = array_error[i];
								if(str.includes("expected primary-expression before")){
									number_of_errors ++;
								} 
						}
						errorService.addErrorCountEE(number_of_errors);		 
						break;
					case 10:
						break;
					case 11:
				}
			},
			SubmitCode: function(){
				var problemCode = $scope.problemCode;
				var editor = ace.edit("editor");
				var code = editor.getValue();
				console.log(problemCode);
				var codeData = {
					problemCode: problemCode,
					compilerId: g_languageId,
					source: code
				}
				var submissionId;

				problemModel.getSubmissionId(codeData)
					.then(function(response){
						$scope.checkingResult = false;
						$scope.submitCodeId = response.data.submissionId;
						$scope.resultSubmissionColor = "submission-running";
						$scope.submitStatusDescription = "";
						$scope.testGetProblemDetails();
					});
			},
			testGetProblemDetails: function(){
				$('#myModal').modal({ keyboard: false, backdrop: false, show: true })
				problemModel.getSubmissionDetails($scope.submitCodeId)
					.success(function(response){
						console.log(response.statusDescription);
						var status_id = response.status;
						$scope.submitStatusDescription = response.statusDescription;
						if(status_id < 9){
							$scope.testGetProblemDetails();
						}else{
							$scope.checkingResult = true;
							
							if(status_id == 15){
								/* code accepted */
								$scope.isCorrect = true;
								$scope.resultSubmissionColor = "submission-accepted";
								$scope.submitStatusDescription = "Accepted!";
								codingService.setSuccess(true);
								codeModel.setRound(round)
									.success(function(){
										console.log('problem set to solve');
									});

								if($scope.isMultiplayer){
									var r = $scope.rooms.$getRecord(roomKey);
									var opponent;	
									if(r.player1 == userId){
										opponent = r.player2;
									}else{
										opponent = r.player1;
									}

									if(!isLose){
										$scope.winOrLoseMessage = "You won against player " + opponent;
										r.winner = userId;
										$scope.rooms.$save(r);
									}else{
										$scope.winOrLoseMessage = "You lose against player " + opponent;
									}
								}


							}else{
								$scope.resultSubmissionColor = "submission-error";
							}
						}
					});
			},
			getSkeletonCode: function(problem_code, language_id){
				problemModel.getSkeletonCode(problem_code, language_id) 
					.success(function(response){
						console.log(response);
						$scope.newCode.codes = response;
						var sc = $scope.newCode.codes;
					    var editor = ace.edit("editor");
					    editor.setTheme("ace/theme/monokai");
					    editor.getSession().setValue(sc);
					    editor.resize();
					});
			},
			updateRankProceed: function(weakness,rank){
				$scope.setRank();
				leaveState = true;
				$state.go('resultPage');
			},
			proceed: function(){
				var weakness = codingService.getWeaknessId();

				if($scope.isCorrect)
					codeModel.rankUp(weakness)
						. success(function(response){
							$scope
							.updateRankProceed(weakness, response);
						});	
				else{
					codeModel.rankDown(weakness)
						. success (function(response){
							$scope.updateRankProceed(weakness, response);
						});
					codingService.setSuccess(false);
				}

			}
		});
		// automatic activity
		if(codingService.getIsEnableCode()){
			// get problem details
			codingService.setSuccess(false);
			var pCode = codingService.getProblemCode();
			var langId = codingService.getLanguage();
			// set problem details
			$scope.problemCode = pCode;
			g_languageId = langId;
			console.log(pCode);
			codeModel.addRound(pCode)
				.success(function (response){
					// round ID
					round = response;
					console.log(response);
				});

			problemModel.getProblem($scope.problemCode)
				.success(function(response){		
					$rootScope.$emit("GlobalToggleSidebar", {});

					$('.nav-tabs a[href="#problem_details"]').tab('show');

					$scope.problemTitle = response.name;
					$scope.problemDescription = response.body;
					$scope.getSkeletonCode($scope.problemCode, g_languageId);
				})

				.error(function(result){
					console.log(result);
				});

			function startTimer(duration,display) {
			    var timer = duration, minutes, seconds;
			    var timerId = setInterval(function () {
			        hours = parseInt((timer / 60) / 60, 10);
			        minutes = parseInt((timer / 60) % 60, 10);
			        seconds = parseInt(timer % 60, 10);

			        hours = hours < 10 ? "0" + hours : hours;
			        minutes = minutes < 10 ? "0" + minutes : minutes;
			        seconds = seconds < 10 ? "0" + seconds : seconds;

			        display.textContent = hours + ":" + minutes + ":" + seconds;

			        if (--timer < 0) {
			            clearInterval(timerId);
			            $('#myTimeUpModal').modal({ keyboard: false, backdrop: false, show: true })
			            console.log("Time's Up!!!");
			        }
			    }, 1000);
			}
			display = document.querySelector('#time');
		    var timeLimit = codingService.getTimeLimit();
		    startTimer(timeLimit, display);
		}else{
			leaveState = true;
			$state.go('problemPage');
			console.log('unable to code');
		}	

		/* Get user id */
	    userModel.getUserId()
			.success(function(response){
				userId = response;
				/* check if multiplayer */
				if(codingService.getIsMultiplayer()){
			    	$scope.isMultiplayer = true;

					var refRoom = firebase.database().ref().child("rooms");
					$scope.rooms = $firebaseArray(refRoom);
			
			    	roomKey = codingService.getRoomKey();

			    	$scope.rooms.$loaded() 
			    		.then(function(room){
			    			checkWinner();
			    		});

			    }
			});

	    function checkWinner(){
	    	var r = $scope.rooms.$getRecord(roomKey);
	  		if(!r.winner){
	  			setTimeout(checkWinner, 1000);
	  			return;
	  		}

  			if(r.winner != userId){
  				isLose = true;
  				alert(r.winner + " has won the game!");
  			}
	  		return;
	    }

	    /* functions when user leaves the page */
		var is_able_c = true;

	  	$scope.$on('$stateChangeStart', function( event ) {
	  		is_able_c = false;	
		    
		    if(!leaveState){
				alert("You have given up.");				
		    }
		});

		window.onbeforeunload = function() { 
	  		if(is_able_c){
			      if(confirm('Your rank will down if you dont finish coding. Are you sure you want to leave?')) {
           			return true; 
			      }
			      else {
			        return false; 
			      }
		  	}
		};	  		

		$(window).on('unload', function(e) {
			console.log("You have given up");
		});


	}]);
myApp.controller('problemController', ['$scope','problemModel', '$state', 'codingService', 'rankService',
	function($scope, problemModel, $state,codingService,rankService){

		var weaknesses = [];
		var problem_code = null;

		// variables
		angular.extend($scope, {
			language: "C",
			languageId: 11,
			loadingProblem: true,
			loadSuccess: false
		});

		// functions
		angular.extend($scope,{
			getProblemCode: function(){
			},
			getProblem: function(){
				/* From Shere Engine API */
				problemModel.getProblem(problem_code)
					.success(function(response){
						$scope.loadingProblem = false;
						$scope.problemTitle = response.name;
						$scope.problemDescription = response.body;
					})
					. error(function(response){
						$scope.loadingProblem = false;
						$scope.problemTitle = "Failed to load problem.";
					});
				/* From My API */
				problemModel.getProblemDetails(problem_code)
					.success(function(response){
						codingService.setTimeLimit(response.time_limit);
						var time = response.time_limit;
						var hr = parseInt((time / 60) / 60, 10);
						var min = parseInt((time / 60) % 60, 10);
						var sec = parseInt(time % 60, 10);
						
						$scope.loadSuccess = true;
						$scope.difficulty = response.difficulty;
						$scope.time_limit = hr + "hr/s and " + min + "min/s"

						switch(response.weakness_id){
							case 1: 
								$scope.subject_area = "Selection Control Structure";
								break;
							case 2: 
							$scope.subject_area = "Repetition Control Structure";
							break;
							case 3: 
							$scope.subject_area = "Array";
							break;
						}
					});
			},
			solveIt: function(){
				console.log(problem_code);
				console.log($scope.languageId);
				codingService.setProblemCode(problem_code);
				codingService.setIsEnableCode(true);
				codingService.setIsMultiplayer(false);
				$state.go('codingPage');
				
			},
			getRandomWeakness: function(){
				var included = [];
				var prioritize = 4;
				for(var x = 0; x < 3; x++){
					var loop = 0;
					var lower = 0;
					var higher = 0;
					if(prioritize == 4){
						for(var y = 0; y < 3 ; y++){
							
							if( x == y ){
								continue;
							}
							loop ++;

							if(Math.abs(weaknesses[x] - weaknesses[y]) >=2 ){
								if(weaknesses[x] > weaknesses[y]){
									higher++;
								} else {
									lower++;
								}
							}

							if(lower == 2){
								prioritize = x;
								break;
							}
							if(higher != 2){
								if(loop == 2){
									included.push(x);
								}
							}
						}
					} else {
						break;
					}
				}
				
				var selected;
				if(prioritize == 4){
					selected = included[Math.floor(Math.random() * included.length)];
				}else{
					selected = prioritize;
				}
				selected ++;

				codingService.setWeaknessId(selected);

				problemModel.getRandomProblem(selected)
					.success(function(response){
						console.log(response);
						if(response != 0){
							problem_code = response;
							$scope.getProblem();
						}else{
							alert('There is no more problem to fetch');
						}
					})	
					.error(function(){
						alert('There was an error fetching a problem');
					});
			},
			languageToC: function(){
				$scope.language = "C";
				$scope.languageId = 11;
				codingService.setLanguage(11);
			},
			languageToCpp: function(){
				$scope.language = "C++";
				$scope.languageId = 1;
				codingService.setLanguage(1);
			},
			languageToJava: function(){
				$scope.language = "Java";
				$scope.languageId = 10;
				codingService.setLanguage(10);
			},
			setRanks: function(){
				console.log('here');
				var rank1 = 0, rank2 = 0, rank3 = 0;
				function initialize(){
					rank1 = rankService.getRankSCS();
					rank2 = rankService.getRankRCS();
					rank3 = rankService.getRankARR();
					if(rank1 == 0 || rank2 == 0 || rank3 == 0){
						setTimeout(initialize, 1000);
					}else{
						weaknesses.push(rank1);
						weaknesses.push(rank2);
						weaknesses.push(rank3);
						$scope.getRandomWeakness();
					}
				}
				initialize();
			}
		});

		if(codingService.getIsMultiplayer()){

		}else{
			$scope.setRanks();
		}

		// Activities
		$scope.languageToCpp();	
		

	}]);

myApp.controller('resultController', ['$scope', 'errorService', 'codingService', 'rankService',
	function($scope, errorService,codingService, rankService){
		{
			$scope.isSuccess = codingService.getSuccess();
			var subject_area = codingService.getWeaknessId();
			
			var getAction = function(sa){
				if(subject_area == sa){
					if($scope.isSuccess)
						return "up";
					else 
						return "down";
				}
				return "none";
			}
			setTimeout(function(){
				$scope.$apply(function(){
					$scope.ranks = [
						{
							"SubjectArea": "Selection Control Structure",
							"Rank": rankService.getRankSCS(),
							"Action" : getAction(1)
						},
						{
							"SubjectArea": "Repetition Control Structure",
							"Rank": rankService.getRankRCS(),
							"Action" : getAction(2)
						},
						{
							"SubjectArea": "Array",
							"Rank": rankService.getRankARR(),
							"Action" : getAction(3)
						}
					]
				});
			}, 2000);
			
			// bar graph

			var getBarColor = function(num){
				if( num > 15){
					return "rgba(255, 0, 0, 0.8)";
				} else if( num <= 15 && num > 8){
					return "rgba(255, 153, 0, 0.8)"
				} else{
					return "rgba(0, 255, 0, 0.8)"
				}
			}
			var ctx = document.getElementById("myChart");
			
			var barColor = [];
			barColor.push(getBarColor(errorService.getErrorCountMS()));
			barColor.push(getBarColor(errorService.getErrorCountSE()));
			barColor.push(getBarColor(errorService.getErrorCountPM()));
			barColor.push(getBarColor(errorService.getErrorCountRE()));
			barColor.push(getBarColor(errorService.getErrorCountEE()));			
			

			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: ["Missing Semicolon", "Scoping Error", "Parenthesis Matching", "Identifier Error"],
			        datasets: [{
			            label: '# of Errors',
			            data: [errorService.getErrorCountMS(), errorService.getErrorCountSE(), errorService.getErrorCountPM(), 
			            		errorService.getErrorCountRE(), errorService.getErrorCountEE()],
			            backgroundColor: barColor
			          
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:true,
			                    max: 40
			                }
			            }]
			        },
			        responsive: false,
			        legend:{
			        	display: false
			        },
			        title: {
			            display: true,
			            text: 'Error Frequencies',
			            fontSize: 20 
			        }
			    }
			});



		}
	}]);
//# sourceMappingURL=controllers.js.map
