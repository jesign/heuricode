myApp.controller('errorHistoryController', ['$scope', 'problemModel', 
	function($scope, problemModel){
		// var ctx = document.getElementById("myChart");

		// var myChart = new Chart(ctx, {
		//     type: 'bar',
		//     data: {
		//         labels: ["Missing Semicolon", "Scoping Error", "Parenthesis Matching", "Identifier Error"],
		//         datasets: [{
		//             label: '# <of></of> Errors',
		//             data: [5,7,4, 6],
		//             backgroundColor: ['#2962ff', '#00bfa5', '#ff6d00', '#ffd600']
		//         }]
		//     },
		//     options: {
		//         scales: {
		//             yAxes: [{
		//                 ticks: {
		//                     beginAtZero:true,
		//                     max: 40
		//                 }
		//             }]
		//         },
		//         responsive: false,
		//         legend:{
		//         	display: false
		//         },
		//         title: {
		//             display: true,
		//             text: 'Error Frequencies',
		//             fontSize: 20 
		//         }
		//     }
		// });

		problemModel.getErrorHistory().success(function(response){
			$scope.data = response;
			console.log(response);
		});
	}]);