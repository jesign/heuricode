myApp.controller("multiplayerController",["$scope", "$rootScope", "$state",
	"$firebaseArray", "userModel", "rankService", "problemModel", "codingService",
	function($scope, $rootScope, $state, $firebaseArray, userModel, rankService, 
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
						setProblem();j
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
				alert('There was an error fetching a problem');
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
			$rootScope.$emit("GlobalToggleSidebar", {});

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
										alert("The rooom has expired.. please refresh the page..");
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
myApp.controller('globalController', ['$scope', 'userModel', 'problemModel', 'rankService',
	function($scope, userModel, problemModel, rankService){

		angular.extend($scope,{
			rankSCS: null,
			rankRCS: null,
			rankARR: null,
			averager: false
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

						if($scope.rankSCS >= 11 && $scope.rankRCS >= 11){
							$scope.averager = true;
						}else{
							$scope.averager = false;
						}
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
		// var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {theme: "material",lineNumbers: true,});
		//function
		console.log('hellow');
		
		
		

		angular.extend($scope, {
			test: function(){
				// console.log(myCodeMirror.getValue());
			},
		});

		var ctx = document.getElementById("myChart");

		var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Missing Semicolon", "Scoping Error", "Parenthesis Matching", "Identifier Error"],
		        datasets: [{
		            label: '# of Errors',
		            data: [5,7,4, 6],
		            backgroundColor: ['#2962ff', '#00bfa5', '#ff6d00', '#ffd600']
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


	}]);
myApp.controller('navController', ['$scope', '$rootScope',
	function($scope, $rootScope){

		$(".button-collapse").sideNav({
			menuWidth: 300, // Default is 240
			edge: 'right',
	      	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		});
	}]);

myApp.controller('codeController', ['$scope','$rootScope', 
		'codeModel', 'problemModel', 'codingService', '$state',
		'errorService', 'rankService', 'userModel', '$firebaseArray',
	function($scope,$rootScope, codeModel, problemModel, codingService,
		$state, errorService, rankService, userModel, $firebaseArray){

		var compiler_token = "0cbe4211ffadf976d70940ca79722da6";

		var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {theme: "material", lineNumbers: true,});

		var opponent_id;	
		// global variables
		var g_languageId = null,
			g_statusId = null,
			g_submitId = null,
			g_array_errors = [],
			round = 0, 
			roomKey = null,
			userId = 0,
			leaveState = false,
			isLose = false,
			hasNewWeakness = false,
			wrongAnswer = 0,
			rank1 = 0,
			rank2 = 0,
			rank3 = 0,
			battle_id = 0,
			isMulti = false;
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
			
			/* alerts */
			alert_title: null,
			alert_description: null,
			closableModal: false

		}); 	
		// functions
		angular.extend($scope, {
			/* Results value or details */
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

			/* Getting Submission Status will loop until status_id is = 0*/
			getSubmissionStatus: function(id){		
				$('ul.tabs').tabs('select_tab', 'output');		
				// $('.nav-tabs a[href="#output"]').tab('show');
				/* request to API the status_id of submission */
				codeModel.submissionStatusModel(id, compiler_token).then(function(response){
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
		  				$scope.resultValueColor = "resultValError";
		  			}else if(response.result == 11){
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
						$scope.getErrorsIE();

						
		  			}else{
		  				$scope.resultValueColor = "resultValError";
		  			}
	  			

				});
			},
			runCode: function(editorForm){
				/* Submit the code to API and get its status */
				$.ajax({
				  	type: "POST",
				  	url: 'http://db4262da.compilers.sphere-engine.com/api/v3/submissions?access_token=' + compiler_token,
				  	data: 
				  		{
				 		sourceCode: myCodeMirror.getValue(),
				 		language: g_languageId,
				 		input: $scope.newCode.input
				 	},
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
				$scope.isCorrect = true;
				codingService.setSuccess(true);

				codeModel.setRound(round)
					.success(function(){
						console.log('problem set to solve');
					});
					/* set to no weakness */
					
				problemModel.setWeakness(0);

				codeModel.saveErrors(errorService.getErrorCountMS(), errorService.getErrorCountSE(),
						errorService.getErrorCountPM(), errorService.getErrorCountIE(), "single" )
						.success(function(){
							console.log("Error counts are set.");
						});

				var weakness = codingService.getWeaknessId();
					
				codeModel.rankUp(weakness)
					.success(function(response){
						$scope.setRank();
						$scope.updateRankProceed();
					});
			},
			testing2: function(){
				$scope.isCorrect = true;
				
				codingService.setSuccess(true);
				/* Multiplayer mode*/
				var r = $scope.rooms.$getRecord(roomKey);
				var opponent;	
				if(r.player1 == userId){
					opponent = r.player2;
				}else{
					opponent = r.player1;
				}

				var isWin;
				
				isWin = 0;
				$scope.winOrLoseMessage = "You lose against player " + opponent;
			
				codeModel.setBattle(battle_id,1, isWin)
					.success(function(){
						console.log('problem set to solve in battle');
					});

				codeModel.saveErrors(errorService.getErrorCountMS(), errorService.getErrorCountSE(),
						errorService.getErrorCountPM(), errorService.getErrorCountIE(), "multiplayer" )
					.success(function(){
						console.log("Error counts are set.");
					});

				$scope.updateRankProceed();

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

						// ';' expected
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
						for(i = 0; i < array_error.length; i++){
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
						for(i = 0; i < array_error.length; i++){
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
						break;
					case 11:
				}					
			},
			getErrorsIE: function(){
				var array_error = g_array_errors;
				var number_of_errors = 0;
				switch(g_languageId){
					case 1:
						for(i = 0; i < array_error.length; i ++){
							var str = array_error[i];
								if(str.includes("expected initializer")){
									number_of_errors ++;
								} 
						}
						errorService.addErrorCountIE(number_of_errors);		 
						break;
					case 10:
						break;
					case 11:
				}
			},
			SubmitCode: function(){
				$('#submitCode').openModal({dismissible:false});
				var problemCode = $scope.problemCode;
				$scope.submitStatusDescription = "";

				var codeData = {
					problemCode: problemCode,
					compilerId: g_languageId,
					source: myCodeMirror.getValue()
				}
				var submissionId;	

				problemModel.getSubmissionId(codeData)
					.then(function(response){
						$scope.checkingResult = false;
						$scope.submitCodeId = response.data.submissionId;
						$scope.resultSubmissionColor = "submission-running";
						$scope.submitStatusDescription = "";
						$scope.testGetProblemDetails();
					})
					.catch(function(response){
						$scope.checkingResult = false;
						$scope.submitStatusDescription = "Sorry submission failed. Please try again...";
						setTimeout(function(){
							$('#submitCode').closeModal();
						}, 3000);
					});
			},
			checkRankForWeakness: function(w){
				switch(w){
					case 1:
						if(rank1 >= 10){
							if(rank2 <= 10 || rank3 <= 10){
								return true;
							}
						}else if(rank1 >= 25){
							if(rank2 <= 25 || rank3 <= 25){
								return true;
							}
						}else{
							if(rank2 <= 40 || rank3 <= 40){
								return true;
							}
						}
						break;
					case 2:
						if(rank2 >= 10){
							if(rank1 <= 10 || rank3 <= 10){
								return true;
							}
						}else if(rank2 >= 25){
							if(rank1 <= 25 || rank3 <= 25){
								return true;
							}
						}else{
							if(rank1 <= 40 || rank3 <= 40){
								return true;
							}
						}
						break;
					case 3:
						if(rank3 >= 10){
							if(rank1 <= 10 || rank2 <= 10){
								return true;
							}
						}else if(rank3 >= 25){
							if(rank1 <= 25 || rank2 <= 25){
								return true;
							}
						}else{
							if(rank1 <= 40 || rank2 <= 40){
								return true;
							}
						}
						break;
				}
				return false;

			},
			testGetProblemDetails: function(){
				// $('#myModal').modal({ keyboard: false, backdrop: false, show: true })
				
				problemModel.getSubmissionDetails($scope.submitCodeId)
					.success(function(response){
						console.log(response);
						var status_id = response.status;
						$scope.submitStatusDescription = response.statusDescription;
						if(status_id < 9){
							$scope.testGetProblemDetails();
						}else{
							$scope.checkingResult = true;
							
							if(status_id == 15){
								/* code accepted */
								if($scope.isMultiplayer){
									$scope.isCorrect = true;
									$scope.resultSubmissionColor = "submission-accepted";
									$scope.submitStatusDescription = "Accepted!";
									codingService.setSuccess(true);
									/* Multiplayer mode*/
									var r = $scope.rooms.$getRecord(roomKey);
									var opponent;	
									if(r.player1 == userId){
										opponent = r.player2;
									}else{
										opponent = r.player1;
									}

									var isWin;
									if(!isLose){
										isWin = 1;
										$scope.winOrLoseMessage = "You won against player " + opponent;
										r.winner = userId;
										$scope.rooms.$save(r);
									}else{
										isWin = 0;
										$scope.winOrLoseMessage = "You lose against player " + opponent;
									}
									
									codeModel.setBattle(battle_id,1, isWin)	
										.success(function(){
											console.log('problem set to solve in battle');
										});

								}else{
									/*Single Player*/
									/* if single player make a deeper judgement */
									/* send source code here.. */
									codeModel.judgeCode(myCodeMirror.getValue(), $scope.problemCode)
										.success(function(response){
											console.log(response);
											if(response == "good"){
												$scope.isCorrect = true;
												$scope.resultSubmissionColor = "submission-accepted";
												codingService.setSuccess(true);
												
												console.log('accepted deep judgement');
												codeModel.setRound(round)
													.success(function(){
														console.log('problem set to solve');
													});	
												/* set to no weakness */
												if( !hasNewWeakness || $scope.checkRankForWeakness(weakness) ){
													problemModel.setWeakness(0);
												}

											}else{	
												$scope.submitStatusDescription = "Requirements are not met.. Please review the problem.";
												
											}
										});

								}
							} else {
								if(!isMulti){
									wrongAnswer++;
									if(wrongAnswer == 3){
										codingService.setHasNewWeakness(true);
										problemModel.setWeakness(codingService.getWeaknessId())
										.success(function(){
											hasNewWeakness = true;
											console.log("weakness set to " + codingService.getWeaknessId());
										});
									}
								}

								$scope.resultSubmissionColor = "submission-error";
							}
						}
					})
					.error(function(){
						$scope.checkingResult = false;
						$scope.submitStatusDescription = "Sorry submission failed. Please try again...";
						setTimeout(function(){
							$('#submitCode').closeModal();
						}, 2000);
					});
			},
			// only for single player
			updateRankProceed: function(){
				codingService.setIsEnableCode(false);
				leaveState = true;
				codingService.setHasResult(true);
				$state.go('resultPage');
			},
			proceed: function(){
				/* set error counts in each subj from this round */
				if(isMulti){
					codeModel.saveErrors(errorService.getErrorCountMS(), errorService.getErrorCountSE(),
						errorService.getErrorCountPM(), errorService.getErrorCountIE(), "multiplayer" )
					.success(function(){
						console.log("Error counts are set.");
					});

					if($scope.isCorrect){

						$scope.updateRankProceed();
					}else{
						var r = $scope.rooms.$getRecord(roomKey);
						r.giveup = userId;
						$scope.rooms.$save(r);
						console.log("you have given up");
						$scope.updateRankProceed();
					}
					
				}else{
					codeModel.saveErrors(errorService.getErrorCountMS(), errorService.getErrorCountSE(),
						errorService.getErrorCountPM(), errorService.getErrorCountIE(), "single" )
						.success(function(){
							console.log("Error counts are set.");
						});

					var weakness = codingService.getWeaknessId();
					if($scope.isCorrect){
						codeModel.rankUp(weakness)
							.success(function(response){
								$scope.setRank();
								$scope.updateRankProceed();
							});
					} else { /* Give up */
						codingService.setHasNewWeakness(true);
						codingService.setSuccess(false);
						problemModel.setWeakness(weakness)
							.success(function(){
								$scope.updateRankProceed();
							});	
					}
				}

			}
		});
		// automatic activity
		rank1 = rankService.getRankSCS();
		rank2 = rankService.getRankRCS();
		rank3 = rankService.getRankARR();
		$('ul.tabs').tabs('select_tab', 'problem_details');
		

		if(codingService.getIsEnableCode()){
			// get problem details
			isMulti = codingService.getIsMultiplayer();
			codingService.setSuccess(false);
			var pCode = codingService.getProblemCode();
			var langId = codingService.getLanguage();
			// set problem details`
			$scope.problemCode = pCode;
			g_languageId = langId;
  			console.log(pCode);
  			
			$scope.problemDescription = codingService.getProblemDescription();

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

			        if(--timer < 0) {
			            clearInterval(timerId);
			            $scope.alert_title = "Time's up!!!";
			            $scope.alert_description = "You have'nt solved the problem on time!";
			            $scope.closableModal = false;
			            $('#alertModal').openModal({dismissible:false});
			        }
			    }, 1000);
			}
			if(codingService.getIsMultiplayer()){
				display = document.querySelector('#time');
			    var timeLimit = codingService.getTimeLimit();
			    startTimer(timeLimit, display);
			}
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

			    	var pcode = codingService.getProblemCode();
			    	$scope.rooms.$loaded() 
			    		.then(function(room){
			    			var r = $scope.rooms.$getRecord(roomKey);
							
							if(r.player1 == userId){
								opponent_id = r.player2;
							}else{
								opponent_id = r.player1;
							}

							codeModel.addBattle(opponent_id, pcode)
							.success(function(response){
								battle_id = response;
							})
								
			    			checkWinner();
			    		});

			    }else{
					codeModel.addRound(pCode)
						.success(function (response){
							round = response;
							console.log("heree.............");
							console.log(response);
						});			    	
			    }
			});

	    function checkWinner(){
	    	var r = $scope.rooms.$getRecord(roomKey);
	  		if(!r.winner && !r.giveup){
	  			setTimeout(checkWinner, 1000);
	  			return;
	  		}

  			if(r.winner == opponent_id){
  				isLose = true;
  				$scope.alert_title = "You lose";
	            $scope.alert_description = r.winner + " has won the game!";
	            $scope.closableModal = true;
	            $('#alertModal').openModal({dismissible:false});
  			}else if(r.giveup == opponent_id){
  				$scope.alert_title = "You won";
	            $scope.alert_description = r.giveup + " has given up!";
				$scope.closableModal = true;
	            $('#alertModal').openModal({dismissible:false});

  				r.winner = userId;
  				$scope.rooms.$save(r);
  				
  				codeModel.setBattle(battle_id,0, 1)
				.success(function(){
  					codingService.setIsWinner(true);
					console.log('problem set to winner in battle');
				});
  			}
	  		return;
	    }

	    /* functions when user leaves the page */
		var is_able_c = true;

	  	$scope.$on('$stateChangeStart', function( event ) {
	  		is_able_c = false;	
		    
		    if(!leaveState){

	    		if(confirm('Are you sure you want to leave? This will be considered that you have given up the problem.')) {
           			codingService.setIsEnableCode(false);
           			/* set to give up. */
           			var r = $scope.rooms.$getRecord(roomKey);
					r.giveup = userId;
					$scope.rooms.$save(r);
					console.log("you have given up");
			    } else {
			    	is_able_c = true;
			   		event.preventDefault();
			    }
		    }
		});

		window.onbeforeunload = function() { 
	  		if(is_able_c){
			      if(confirm('Are you sure you want to leave? this will be considered that you have given up the problem.')) {
			      	codingService.setIsEnableCode(false);
           			return true; 
			      }
			      else {
			        return false; 
			      }
		  	}
		};	 

		$(window).on('unload', function(e) {

			var r = $scope.rooms.$getRecord(roomKey);
			r.giveup = userId;
			$scope.rooms.$save(r);
			console.log("you have given up");
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
			loadSuccess: false,
			hasWeakness: false
		});

		// functions
		angular.extend($scope,{
			getProblemCode: function(){
			},
			getProblem: function(){
				/* From Shere Engine API */
				var i = 0;
				var getProblemFromApi = function(){
					problemModel.getProblem(problem_code)
						.success(function(response){
							$scope.loadingProblem = false;
							$scope.problemDescription = response.body;
							codingService.setProblemDescription(response.body);
						})
						. error(function(response){
							if(i == 5){
								$scope.loadingProblem = false;
								$scope.problemDescription = "Failed to load problem. Please refresh the page.";
							}else{
								getProblemFromApi();
								i++;
								
							}
						});
				}
				getProblemFromApi();
				/* From My API */
				problemModel.getProblemDetails(problem_code,'single')
					.success(function(response){
						codingService.setTimeLimit(response.time_limit);
						var time = response.time_limit;
						var hr = parseInt((time / 60) / 60, 10);
						var min = parseInt((time / 60) % 60, 10);
						var sec = parseInt(time % 60, 10);
						
						$scope.loadSuccess = true;
						$scope.difficulty = response.difficulty;
						codingService.setProblemDifficulty(response.difficulty);
						
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
					})
					.error(function(response){
						console.log(response);
						$scope.loadingProblem = false;		
						$scope.problemTitle = "Failed to load problem. Please Try Again";
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
			getRandomProblems: function(w){
				problemModel.getRandomProblem(w)
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
			getRandomWeakness: function(subjScope){
				var selected;
				console.log("SCOPE " + subjScope);
				var included = [];
				var prioritize = 4;
				if(subjScope == 3){
					for(var x = 0; x < 3; x++){
						var loop = 0; 
						var lower = 0;
						var higher = 0;
						if(prioritize == 4){
							for(var y = 0; y < 3 ; y++){
								
								if( x == y ){
									continue;
								}
								loop++;

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
					

				}else{
					var diff = weaknesses[0] - weaknesses[1];
					if( diff >= 2){
						prioritize = 1;
					}else if(diff <= -2){
						prioritize = 0;
					}else{
						included.push(0);
						included.push(1);
					}
				}				
				console.log(included);
				if(prioritize == 4){
					selected = included[Math.floor(Math.random() * included.length)];
				}else{
					selected = prioritize;
				}
				selected++;
				console.log("selected: " + selected);

				codingService.setWeaknessId(selected);
				$scope.getRandomProblems(selected);
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
						var subjScope = 2;
						if(rank1 > 10 && rank2 > 10){
							subjScope = 3;
						}

						weaknesses.push(rank1);
						weaknesses.push(rank2);
						weaknesses.push(rank3);
						$scope.getRandomWeakness(subjScope);
					}
				}
				initialize();
			}
		});

		if(codingService.getIsMultiplayer()){

		}else{	
			problemModel.checkHasWeakness()
				.success(function(response){
					if(response == 0){
						$scope.setRanks();
					}else{
						console.log("You have a problem in subject area -> " + response);
						codingService.setWeaknessId(response);
						$scope.getRandomProblems(response);
					}
				});
		}

		// Activities
		$scope.languageToCpp();	
	}]);

myApp.controller('resultController', ['$scope', 'errorService', 'codingService', 
						'rankService', '$state', 'problemModel','badgeModel',
	function($scope, errorService,codingService, rankService, $state, problemModel, badgeModel){
		{
			var checkBadges = function(){

				if(codingService.getIsMultiplayer()){

				}else{
					console.log('checking badges for solo mode');
					badgeModel.getBadges().success(function(response){
						var badgesID = [];

						angular.forEach(response,function(value, key){
							badgesID.push(value.id);
						});
						console.log(badgesID);

						var checkIfExist = function(badges, id){
							for(var x = 0; x < badges.length; x++){
								if(badges[x] == id){
									return true;
								}
							}
							return false;
						}
						var giveBadge = function($id){
							badgeModel.addBadge($id)
								.success(function(response){
									$scope.badgeFileName = response.filename;
									$scope.badgeName = response.name;
									$scope.badgeDescription = response.description;
									console.log(response.name)
									console.log(response.description);
									$('#badgeModal').openModal({dismissible:false});
								});
						}
						if(codingService.getProblemDifficulty() == 'easy'){
							if(!checkIfExist(badgesID, 1)){
								console.log('started from the bottom');
									giveBadge(1);
							}
							badgeModel.countSolved('easy', 0)
								.success(function(response){
									if(!checkIfExist(badgesID, 2)){
										if(response >= 5){
											console.log("We’re getting there!");		
											giveBadge(2);
										}
									} else if(checkIfExist(badgesID, 3)){
										if(response >= 10){
											console.log('Ten steps closer to success!');
											giveBadge(3);
										}
									} else if(badgesID, 6){
										if(response >= 25){
											console.log('Easy krizzy!');
											giveBadge(6);
										}
									}
								});
							if(!checkIfExist(5)){
							badgeModel.countSolved('easy', 1)
								.success(function(response){
									if(response >= 10){
										console.log('I choose you!');
										giveBadge(5);
									}
								});
							}
							if(!checkIfExist(4)){
								badgeModel.countSolved('easy', 2)
									.success(function(response){
										if(response >= 10){
											console.log('Repeat after me!');
											giveBadge(4);
										}
									});
							}
						} else if(codingService.getProblemDifficulty() == 'average'){
							badgeModel.countSolved('average', 0)
								.success(function(response){
									if(!checkIfExist(badgesID, 7)){
									
										if(response >= 5){
											console.log('Not your average programmer!');
											giveBadge(7);
										}
									} else if(!checkIfExist(badgesID, 8)){
										if(response >= 10){
											console.log('Average? I’m beyond that!');
											giveBadge(8);
										}
									} else if(!checkIfExist(12)){
										if(response >= 45){
											console.log('Hard mode here I come!');
											giveBadge(12);
										}
									}
								});

							if(!checkIfExist(badgesID, 10)){
								badgeModel.countSolved('average', 1)
								.success(function(response){
										if(response >= 15){
											console.log('The selection life chose me!');
											giveBadge(10);
										}
									});
							}
							if(!checkIfExist(badgesID, 9)){
								badgeModel.countSolved('average', 2)
								.success(function(response){
										if(response >= 15){
											console.log('Over and over again!');
											giveBadge(9);
										}
									});
							}
							if(!checkIfExist(badgesID, 11)){
								badgeModel.countSolved('average', 3)
								.success(function(response){
										if(response >= 15){
											console.log('Bombs Array!');
											giveBadge(11);
										}
									});
							}
						} else if(codingService.getProblemDifficulty() == 'hard'){
							
							badgeModel.countSolved('hard', 0)
								.success(function(response){
									if(!checkIfExist(13)){
										if(response >= 5){
											console.log('Challenge Accepted!');
											giveBadge(13);
										}
									}
			                        if(!checkIfExist(14)){
										if(response >= 10){
											console.log('Road to success!');
											giveBadge(14);
										}
									}		
									if(!checkIfExist(18)){
										if(response >= 45){
											console.log('Hardships have only made me stronger!');
											giveBadge(18);
										}
									}
								});
								
							if(!checkIfExist(16)){
								badgeModel.countSolved('hard', 1)
									.success(function(response){
										if(response >= 15){
											console.log("You've chosen wisely!");
											giveBadge(16);
										}
									});
							}
							if(!checkIfExist(15)){
								badgeModel.countSolved('hard', 2)
									.success(function(response){
										if(response >= 15){
											console.log('Eat. Sleep. Code. Repeat!');
											giveBadge(15);
										}
									});
							}
							if(!checkIfExist(17)){
								badgeModel.countSolved('hard', 3)
									.success(function(response){
										if(response >= 15){
											console.log('Arranged? No, array-nged!');
											giveBadge(17);
										}
									});
							}
						}
					});
				}
			}
			checkBadges();

			$scope.isSuccess = codingService.getSuccess();
			$scope.isMultiplayer = codingService.getIsMultiplayer();
			$scope.isWinner = codingService.getIsWinner();
			var subject_area = codingService.getWeaknessId();
			
			if(!codingService.getHasResult()){
				$state.go('statProgPage');
			}
			if(codingService.getHasNewWeakness()){
				problemModel.getProblemFeedBack(codingService.getProblemCode())
					.success(function(response){
						$scope.feedback = response;
						codingService.setHasNewWeakness(false);
					});
			}
			var getAction = function(sa){
				if(subject_area == sa){
					if($scope.isSuccess)
						return "up";
				}
				return "none";
			}
			setTimeout(function(){
				$scope.$apply(function(){
					if($scope.averager){
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
						$scope.ranksLoaded = true;
					}else{
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
							}
						]
						$scope.ranksLoaded = true;
					}
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
			barColor.push(getBarColor(errorService.getErrorCountIE()));			

			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: ["Missing Semicolon", "Scoping Error", "Parenthesis Matching", "Identifier Error"],
			        datasets: [{
			            label: '# of Errors',
			            data: [errorService.getErrorCountMS(), errorService.getErrorCountSE(), 
			            		errorService.getErrorCountPM(), errorService.getErrorCountIE()],
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
myApp.controller('statprogController', ['$scope', 'userModel',
	function($scope, userModel){
		angular.extend($scope, {
			hasProgress_single: false,
			noProgress_single: false,
			hasProgress_multi: false,
			noProgress_multi: false
		});

		angular.extend($scope, {
			getData: function(label, data, r, g , b){
				var data_object = {
						            label: label,
						            lineTension: 0.1,
						            backgroundColor: "rgba("+ r + "," + g + "," + b + ",0.1)",
						            borderColor: "rgba("+ r + "," + g + "," + b + ",1)",
						            borderCapStyle: 'butt',
						            borderDash: [],
						            borderDashOffset: 0.0,
						            borderJoinStyle: 'miter',
						            pointBorderColor: "rgba("+ r + "," + g + "," + b + ",1)",
						            pointBackgroundColor: "#fff",
						            pointBorderWidth: 1,
						            pointHoverRadius: 5,
						            pointHoverBackgroundColor: "rgba("+ r + "," + g + "," + b + ",1)",
						            pointHoverBorderColor: "rgba(220,220,220,1)",
						            pointHoverBorderWidth: 2,
						            pointRadius: 1,
						            pointHitRadius: 10,
						            data: data,
						            spanGaps: false,
						        }
				return data_object;
			},
			showGraph: function(response, mode){
				if(response != 0){
					
					if(mode == "single"){
						$scope.hasProgress_single = true;
						var ctx = document.getElementById("statistical_progress_single");
					}
					else{
						$scope.hasProgress_multi = true;
						var ctx = document.getElementById("statistical_progress_multi");
					}

					var errs = response;
					var lbl_i = 1;
					var label = [];
					var ms = [], se = [],
					pm = [], ie = [];
					
					for(var x = 0; x < errs.length; x++){
						if(errs[x].type == 1){
							label.push(lbl_i);
							ms.push(errs[x].count);
							lbl_i++;
						}
						else if(errs[x].type == 2)
							se.push(errs[x].count);
						else if(errs[x].type == 3)
							pm.push(errs[x].count);
						else if(errs[x].type == 4)
							ie.push(errs[x].count);
					}
					var data = {
					    labels: label,
					    datasets: [
					        $scope.getData("Missing Semicolon", ms, 255, 51, 51),
					        $scope.getData("Scoping Error", se, 192, 75, 192),
					        $scope.getData("Parenthesis Matching", pm, 51, 255, 51),
					        $scope.getData("Initializer Error", ie, 255, 255, 51),
					    ]
					};

					var myLineChart = new Chart(ctx, {
					    type: 'line',
					    data: data
					});

					console.log(ms);
					console.log(se);
					console.log(pm);
					console.log(ie);
				}else{
					if(mode == "single"){
						$scope.noProgress_single = true;
					}else{
						$scope.noProgress_multi = true;
					}
				}
			},
			getErrorsCount: function(){
				userModel.getAllErrorsCount('single')
					.success(function(response){
						$scope.showGraph(response, 'single');
					});	
				userModel.getAllErrorsCount('multiplayer')
					.success(function(response){
						$scope.showGraph(response, 'multi');
					});	

			}
		});

		$scope.getErrorsCount();

	}]);
//# sourceMappingURL=controllers.js.map
