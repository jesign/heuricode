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

myApp.service('codeDetailsService', function() {
  	var enableCode = false;
  	var problemCode = null;
  	var languageId = null;

  	var setIsEnableCode = function(isEnable){
  		enableCode = isEnable;
  	}
  	var getIsEnableCode = function(){
  		return enableCode;
  	}

  	var setProblemCode = function(pCode) {
      	problemCode = pCode;
  	}

  	var getProblemCode = function(){
     	return problemCode;
  	}

  	var setLanguage = function(langId){
  		languageId = langId;
  	}
  	var getLanguage = function(){
  		return languageId;
  	}

	return {
		setIsEnableCode: setIsEnableCode,
		getIsEnableCode: getIsEnableCode,
	    setProblemCode: setProblemCode,
    	getProblemCode: getProblemCode,
    	setLanguage: setLanguage,
    	getLanguage: getLanguage
  	};
});

//# sourceMappingURL=app.js.map
