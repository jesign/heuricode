var myApp = angular.module('myApp', ['ui.router', 'ngSanitize']);

myApp.config(['$interpolateProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
	function($interpolateProvider, $stateProvider, $urlRouterProvider, $locationProvider,$httpProvider){
		$interpolateProvider.startSymbol('<%');
		$interpolateProvider.endSymbol('%>');

		delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$stateProvider.state({
			templateUrl: 'templates/test.html',
			controller: 'userController',
			url: '/test',
			name: 'testPage'
		}),
		$stateProvider.state({
			templateUrl: 'templates/problem.html',
			controller: 'problemController',
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


//# sourceMappingURL=app.js.map
