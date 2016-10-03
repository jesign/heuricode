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
									badgeFileName = response.filename
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
										console.log("We’re getting there!");		
										if(response >= 5){
											giveBadge(2);
										}
									} else if(checkIfExist(badgesID, 3)){
										console.log('Ten steps closer to success!');
										if(response >= 10){
											giveBadge(3);
										}
									} else if(badgesID, 6){
										console.log('Easy krizzy!');
										if(response >= 25){
											giveBadge(6);
										}
									}
								});
							if(!checkIfExist(5)){
							console.log('I choose you!');
							badgeModel.countSolved('easy', 1)
								.success(function(response){
									if(response >= 10){
										giveBadge(5);
									}
								});
							}
							if(!checkIfExist(4)){
								console.log('Repeat after me!');
								badgeModel.countSolved('easy', 2)
									.success(function(response){
										if(response >= 10){
											giveBadge(4);
										}
									});
							}
						} else if(codingService.getProblemDifficulty() == 'average'){
							badgeModel.countSolved('average', 0)
								.success(function(response){
									if(!checkIfExist(badgesID, 7)){
										console.log('Not your average programmer!');
									
										if(response >= 5){
											giveBadge(7);
										}
									} else if(!checkIfExist(badgesID, 8)){
										console.log('Average? I’m beyond that!');
										if(response >= 10){
											giveBadge(8);
										}
									} else if(!checkIfExist(12)){
										console.log('Hard mode here I come!');
										if(response >= 45){
											giveBadge(12);
										}
									}
								});

							if(!checkIfExist(badgesID, 10)){
								console.log('The selection life chose me!');
								badgeModel.countSolved('average', 1)
								.success(function(response){
										if(response >= 15){
											giveBadge(10);
										}
									});
							}
							if(!checkIfExist(badgesID, 9)){
								console.log('Over and over again!');
								badgeModel.countSolved('average', 2)
								.success(function(response){
										if(response >= 15){
											giveBadge(9);
										}
									});
							}
							if(!checkIfExist(badgesID, 11)){
								console.log('Bombs Array!');
								badgeModel.countSolved('average', 3)
								.success(function(response){
										if(response >= 15){
											giveBadge(11);
										}
									});
							}
						} else if(codingService.getProblemDifficulty() == 'hard'){
							
							badgeModel.countSolved('hard', 0)
								.success(function(response){
									if(!checkIfExist(13)){
										console.log('Challenge Accepted!');
										if(response >= 5){
											giveBadge(13);
										}
									}
			                        if(!checkIfExist(14)){
										console.log('Road to success!');
										if(response >= 10){
											giveBadge(14);
										}
									}		
									if(!checkIfExist(18)){
										console.log('Hardships have only made me stronger!');
										if(response >= 45){
											giveBadge(18);
										}
									}
								});
								
							if(!checkIfExist(16)){
								console.log("You've chosen wisely!");
								badgeModel.countSolved('hard', 1)
									.success(function(response){
										if(response >= 15){
											giveBadge(16);
										}
									});
							}
							if(!checkIfExist(15)){
								console.log('Eat. Sleep. Code. Repeat!');
								badgeModel.countSolved('hard', 2)
									.success(function(response){
										if(response >= 15){
											giveBadge(15);
										}
									});
							}
							if(!checkIfExist(17)){
								console.log('Arranged? No, array-nged!');
								badgeModel.countSolved('hard', 3)
									.success(function(response){
										if(response >= 15){
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