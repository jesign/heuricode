myApp.factory('userModel', ['$http', function($http){
	return {
		getProblem: function(){
			return $http.get(baseUrl + 'problem');
		},
	};
}]);