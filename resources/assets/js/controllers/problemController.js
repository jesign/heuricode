myApp.controller('problemController', ['$scope','problemModel', '$state', 'codingService', 'rankService',
	function($scope, problemModel, $state,codingService,rankService){

		var weaknesses = [];
		var problem_code = null;
		// variables
		angular.extend($scope, {
			language: "C",
			languageId: 11,
			loadingProblem: true
		});

		// functions
		angular.extend($scope,{
			getProblemCode: function(){
			},
			getProblem: function(){
				problemModel.getProblem(problem_code).success(function(response){
					$scope.loadingProblem = false;
					$scope.problemTitle = response.name;
					$scope.problemDescription = response.body;
				});
			},
			solveIt: function(){
				console.log(problem_code);
				console.log($scope.languageId);
				codingService.setProblemCode(problem_code);
				codingService.setIsEnableCode(true);
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

				// problemModel.getRandomProblem(selected)
				problemModel.getRandomProblem(1)
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
						setTimeout(initialize, 100);
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

		// Activities
		$scope.setRanks();
		$scope.languageToCpp();	
		

	}]);
