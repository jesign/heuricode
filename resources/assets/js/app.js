var myApp = angular.module('myApp', []);

myApp.config(['$interpolateProvider',	
	function($interpolateProvider){
		$interpolateProvider.startSymbol('<%');
		$interpolateProvider.endSymbol('%>');
	}
]);	 