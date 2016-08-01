myApp.controller("multiplayerController", function($scope, $firebaseArray) {
	var ref = firebase.database().ref().child("messages");
	  // create a synchronized array
  	$scope.messages = $firebaseArray(ref);
	  // add new items to the array
	  // the message is automatically added to our Firebase database!
  	$scope.addMessage = function() {
	    $scope.messages.$add({
	      text: $scope.newMessageText
	    });
  	};
}); 
