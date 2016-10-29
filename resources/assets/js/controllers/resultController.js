myApp.controller('resultController', ['$scope', 'errorService', 'codingService', 
						'rankService', '$state', 'problemModel','badgeModel',
	function($scope, errorService,codingService, rankService, $state, 
		problemModel, badgeModel){
		{
			var checkBadges = function(){
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
								$('#badgeModal').openModal();
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
			$scope.isSuccess = codingService.getSuccess();

			if(codingService.getSuccess()){
				if(codingService.getIsMultiplayer()){
					$scope.isMultiplayer = codingService.getIsMultiplayer();
					$scope.isWinner = codingService.getIsWinner();
				}else{
					checkBadges();
				}
			}else{
				if(codingService.getIsMultiplayer()){
					$scope.isMultiplayer = codingService.getIsMultiplayer();
					$scope.isWinner = codingService.getIsWinner();
				}
			}
			if(!codingService.getIsMultiplayer()){
				var subject_area = codingService.getWeaknessId();
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
			}
			
			
			if(!codingService.getHasResult()){
				$state.go('statProgPage');
			}

			
			// bar graph
			$scope.errorFeedback = "";
			$scope.hasErrorFeedback = false;

			var addFeedback = function(error, value){
				$scope.hasErrorFeedback = true;
				if(error == 1 && value == 1){
					$scope.errorFeedback += "<br>You've made more than <span style='color: blue;'>8 Missing Semicolon Errors</span>. It seems that you are experiencing difficulty with this type of error. Don't forget to put semicolons where you need to place them when you code.\n";
				}else if(error == 1 && value == 2){
					$scope.errorFeedback += "<br>You’ve made more than 15 <span style='color: blue;'>5 Missing Semicolon Errors</span>. It seems that you are problematic with this type of error. Always be mindful of where you need to place your semicolons in your code.\n";
				}else if(error == 2 && value == 1){
					$scope.errorFeedback += "<br>You've made more than <span style='color: blue;'>8 Scoping Errors</span>. It seems that you are experiencing difficulty with this type of error. Don't forget to keep track of the brackets of your functions as they determine the scope of each.\n";
				}else if(error == 2 && value == 2){
					$scope.errorFeedback += "<br>You've made more than <span style='color: blue;'>15 Scoping Errors</span>. It seems that you are problematic with this type of error. Always be mindful of the brackets of your functions as they determine the scope of each.\n";
				}else if(error == 3 && value == 1){
					$scope.errorFeedback += "<br>You’ve made more than <span style='color: blue;'>8 Parentheses Matching Errors</span>. It seems that you are experiencing difficulty with this type of error. Don’t forget that whenever you type a parenthesis, match it with another.\n";
				}else if(error == 3 && value == 2){
					$scope.errorFeedback += "<br>You’ve made more than <span style='color: blue;'>15 Parentheses Matching Errors</span>. It seems that you are problematic with this type of error. Always be mindful of the parentheses in your code, one must always be paired with another.\n";
				}else if(error == 4 && value == 1){
					$scope.errorFeedback += "<br>You’ve made more than <span style='color: blue;'>8 Initializer Errors</span>. It seems that you are experiencing difficulty with this type of error. Don’t forget to initialize statements in your code properly.\n";
				}else if(error == 4 && value == 2){
					$scope.errorFeedback += "<br>You’ve made more than <span style='color: blue;'>15 Initializer Errors</span>. It seems that you are problematic with this type of error. Always be mindful of initializing statements in your code properly.\n";
				}
			}

			var getBarColor = function(error, num){
				if( num > 15){
					addFeedback(error, 2);
					return "rgba(255, 0, 0, 0.8)";
				} else if( num <= 15 && num > 8){
					addFeedback(error, 1);
					return "rgba(255, 153, 0, 0.8)";
				} else{
					return "rgba(0, 255, 0, 0.8)";
				}
			}
			var ctx = document.getElementById("myChart");
			
			var barColor = [];
			barColor.push(getBarColor(1,errorService.getErrorCountMS()));
			barColor.push(getBarColor(2,errorService.getErrorCountSE()));
			barColor.push(getBarColor(3,errorService.getErrorCountPM()));
			barColor.push(getBarColor(4,errorService.getErrorCountIE()));			

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

			errorService.clearErrors();
		}
	}]);