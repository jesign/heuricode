myApp.controller('resultController', ['$scope', 'errorService', 
	function($scope, errorService){
		{
			var getBarColor = function(num){
				if( num > 10){
					return "rgba(255, 0, 0, 0.8)";
				} else if( num <= 10 && num > 5){
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
			        labels: ["Missing Semicolon", "Scoping Error", "Parenthesis Matching", "Runtime Error", "Expression Error"],
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
			                    max: 50			                    
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