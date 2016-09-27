myApp.controller('userController', ['$scope', 
	function($scope){
		var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {theme: "material",lineNumbers: true,});
		//function
		angular.extend($scope, {
			test: function(){
				console.log(myCodeMirror.getValue());
			},
		});
	}]);