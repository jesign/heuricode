var myApp = angular.module('myApp', ['ui.router', 'ngSanitize','firebase']);

myApp
	.run(function(){
		var config = {
		   	apiKey: "AIzaSyDf0vhUKUBNUxtmzYAGiNB1fkfjkxEzTHo",
		    authDomain: "heuricode.firebaseapp.com",
		    databaseURL: "https://heuricode.firebaseio.com",
		    storageBucket: "heuricode.appspot.com",
		};
	  	firebase.initializeApp(config);
	})
	.config(['$interpolateProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider','$httpProvider',
		function($interpolateProvider, $stateProvider, $urlRouterProvider, $locationProvider,$httpProvider){
			$interpolateProvider.startSymbol('<%');
			$interpolateProvider.endSymbol('%>');

			delete $httpProvider.defaults.headers.common['X-Requested-With'];

			$stateProvider.state({
				templateUrl: 'templates/home.html',
				url: '/home',
				name: 'homePage'
			}),
			$stateProvider.state({
				templateUrl: 'templates/setting.blade.php',
				controller: 'userController',
				url: '/settings',
				name: 'settingPage'
			}),
			$stateProvider.state({
				templateUrl: 'templates/test.html',
				url: '/help',
				name: 'helpPage'
			}),
			$stateProvider.state({
				templateUrl: 'templates/statProg.html',
				controller: 'statprogController',
				url: '/statisticalProgress',
				name: 'statProgPage'
			}),
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
			$stateProvider.state({
				templateUrl: 'templates/multiplayer.html',
				controller: 'multiplayerController',
				url: '/multiplayer',
				name: 'multiplayerPage'
			}),
			$stateProvider.state({
				templateUrl: 'templates/badges.html',
				controller: 'badgeController',
				url: '/badges',
				name: 'badgesPage'
			}),
			$stateProvider.state({
				templateUrl: 'templates/result.html',
				controller: 'resultController',
				url: '/result',
				name: 'resultPage'
			});		
		}
	]);	 

