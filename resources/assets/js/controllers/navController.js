myApp.controller('navController', ['$scope', '$rootScope',
	function($scope, $rootScope){

		$(".button-collapse").sideNav({
			menuWidth: 300, // Default is 240
			edge: 'right',
	      	closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		});
	}]);
