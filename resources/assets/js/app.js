var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$interpolateProvider', '$routeProvider','$locationProvider','$httpProvider',
	function($interpolateProvider, $routeProvider, $locationProvider,$httpProvider){
		$interpolateProvider.startSymbol('<%');
		$interpolateProvider.endSymbol('%>');

		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$routeProvider.when('/', {
			templateUrl: 'templates/test.html',
			controller: 'userController'
		}),
		$routeProvider.when('/problem',{
			templateUrl: 'templates/problem.html',
			controller: 'userController'
		}),
		$routeProvider.when('/coding',{
			templateUrl: 'templates/coding.html',
			controller: 'codeController'
		}),
		$routeProvider.otherwise('/');

	}
]);	 