myApp.factory('userModel', ['$http', function($http){
	return {
		checkAuth: function(){
			return $http.get(baseUrl + 'checkAuth');
		}
	};
}]);