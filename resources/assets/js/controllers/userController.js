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