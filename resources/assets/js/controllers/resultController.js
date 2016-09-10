myApp.controller('resultController', ['$scope', 'errorService', 'codingService', 'rankService',
	function($scope, errorService,codingService, rankService){
		{
			$scope.isSuccess = codingService.getSuccess();
			var subject_area = codingService.getWeaknessId();
			
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