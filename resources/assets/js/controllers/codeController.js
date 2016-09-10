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
			isLose = false,
			hasNewWeakness = false,
			wrongAnswer = 0,
			rank1 = 0,
			rank2 = 0,
			rank3 = 0;

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
				$('.nav-tabs a[href="#output"]').tab('show');
				/* request to API the status of submission */
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


						// temporary display error counts
						$scope.errors.ms = errorService.getErrorCountMS();
						$scope.errors.se = errorService.getErrorCountSE();
						$scope.errors.pm = errorService.getErrorCountPM();
						$scope.errors.ee = errorService.getErrorCountIE();
		  			}else{
		  				$scope.resultValueColor = "resultValError";
		  			}
	  			

				});
			},
			runCode: function(editorForm){
				var editor = ace.edit("editor");
				var code = editor.getValue();
				console.log("code " + code);
				
				/* Submit the code to API and get its status */
				$.ajax({
				  	type: "POST",
				  	url: 'http://db4262da.compilers.sphere-engine.com/api/v3/submissions?access_token=00c04ffac4d4ffe13d590b91b70ef3f2',
				  	data: 
				  		{
				 		sourceCode: code,
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
				$('#myModal').modal({ keyboard: false, backdrop: false, show: true })
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
								$scope.isCorrect = true;
								$scope.resultSubmissionColor = "submission-accepted";
								$scope.submitStatusDescription = "Accepted!";
								codingService.setSuccess(true);
								codeModel.setRound(round)
									.success(function(){
										console.log('problem set to solve');
									});

								/* set to no weakness */
								if( !hasNewWeakness || checkRankForWeakness(weakness) ){
									problemModel.setWeakness(0);
								}

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
								wrongAnswer++;
								if(wrongAnswer == 3){
									problemModel.setWeakness(codingService.getWeaknessId())
									.success(function(){
										hasNewWeakness = true;
										console.log("weakness set to " + codingService.getWeaknessId());
									});
								}

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
			updateRankProceed: function(){
				
				$scope.setRank();
				leaveState = true;
				$state.go('resultPage');
			},
			proceed: function(){
				/* set error counts in each subj from this round */
				codeModel.saveErrors(errorService.getErrorCountMS(), errorService.getErrorCountSE(),
					errorService.getErrorCountPM(), errorService.getErrorCountIE(), "single" )
				.success(function(){
					console.log("Error counts are set.");
				});

				var weakness = codingService.getWeaknessId();
				if($scope.isCorrect){
					codeModel.rankUp(weakness)
						.success(function(response){
							codingService.setIsEnableCode(false);
							$scope.updateRankProceed();
						})
						.error(function(){
							$scope.proceed();
						});
				} else {
					codingService.setIsEnableCode(false);
					codingService.setSuccess(false);
					problemModel.setWeakness(weakness)
					.success(function(){
						$scope.updateRankProceed();
					});
					
				}
			}
		});
		// automatic activity
		rank1 = rankService.getRankSCS();
		rank2 = rankService.getRankRCS();
		rank3 = rankService.getRankARR();

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
	    		if(confirm('Are you sure you want to leave? this will be considere that you have given up the problem.')) {           			
           			codingService.setIsEnableCode(false);
			    } else {
			    	is_able_c = true;
			   		event.preventDefault();
			    }
		    }
		});

		window.onbeforeunload = function() { 
	  		if(is_able_c){
			      if(confirm('Are you sure you want to leave? this will be considere that you have given up the problem.')) {
			      	codingService.setIsEnableCode(false);
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