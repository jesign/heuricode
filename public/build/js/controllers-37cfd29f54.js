myApp.controller('userController', ['$scope', 
	function($scope){


		//function
		angular.extend($scope, {
			testFunction: function(){
				alert('Yeah');
			}
		});

	}]);
myApp.controller('navController', ['$scope', 
	function($scope){


		// variables
		angular.extend($scope, {
			
		});
		
		// functions
		angular.extend($scope, {
			test: function(){
				var sidebar = $("#sidebar-wrapper");
				var content = $("#page-content-wrapper");
				if(sidebar.hasClass("open")){
					sidebar.css('-webkit-transform', 'translate(-98%,0');
					content.css('padding-left', "0%");
				}else{
					sidebar.css('-webkit-transform', 'translate(0,0');	
					content.css('padding-left', "240px");
				}
				sidebar.toggleClass("open");
			},
			notAuth: function(){
				
				var sidebar = $("#sidebar-wrapper");
				var content = $("#page-content-wrapper");

				sidebar.css('-webkit-transform', 'translate(-98%,0');
				content.css('padding-left', "0%");

				console.log('Not auth');
			}
		});
	}]);

//# sourceMappingURL=controllers.js.map
