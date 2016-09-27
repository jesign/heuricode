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