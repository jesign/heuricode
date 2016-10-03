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
				problemModel.getProblem(problem_code)
					.success(function(response){
						$scope.loadingProblem = false;
						$scope.problemTitle = response.name;
						$scope.problemDescription = response.body;
					})
					. error(function(response){
						console.log(response);
						$scope.loadingProblem = false;
						$scope.problemTitle = "Failed to load problem. Please Try Again";
					});
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
