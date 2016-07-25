myApp.service('errorService', function() {
  	var errorMS = 0;
    var errorSE = 0;
    var errorPM = 0;
    var errorREE = 0;
    var errorRE = 0;

    var addErrorCountMS = function($count){
      errorMS += $count;
    }
    var getErrorCountMS = function(){
      return errorMS;
    }
    var addErrorCountSE = function($count){
      errorSE += $count;
    }
    var getErrorCountSE = function(){
      return errorSE;
    }
    var addErrorCountPM = function($count){
      errorPM += $count;
    }
    var getErrorCountPM = function(){
      return errorPM;
    }
    var addErrorCountREE = function($count){
      errorREE += $count;
    }
    var getErrorCountREE = function(){
      return errorREE;
    }
    var addErrorCountRE = function($count){
      errorRE += $count;
    }
    var getErrorCountRE = function(){
      return errorRE;
    }

	return {
		  addErrorCountMS: addErrorCountMS,
      getErrorCountMS: getErrorCountMS,

      addErrorCountSE: addErrorCountSE,
      getErrorCountSE: getErrorCountSE,

      addErrorCountPM: addErrorCountPM,
      getErrorCountPM: getErrorCountPM,

      addErrorCountREE: addErrorCountREE,
      getErrorCountREE: getErrorCountREE,

      addErrorCountRE: addErrorCountRE,
      getErrorCountRE: getErrorCountRE,
  	};
});
