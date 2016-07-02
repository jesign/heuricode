var myApp = angular.module('myApp', ['ui.router']);

myApp.config(['$interpolateProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
	function($interpolateProvider, $stateProvider, $urlRouterProvider, $locationProvider,$httpProvider){
		$interpolateProvider.startSymbol('<%');
		$interpolateProvider.endSymbol('%>');

		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$stateProvider.state({
			templateUrl: 'templates/problem.html',
			controller: 'userController',
			url: '/problem',
			name: 'problemPage'
		}),
		$stateProvider.state({
			templateUrl: 'templates/coding.html',
			controller: 'codeController',
			url: '/coding',
			name: 'codingPage'
		}),

		$urlRouterProvider.otherwise('/');

	}
]);	 