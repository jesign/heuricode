myApp.service('errorService', function() {
  	var errorMS = 0;
    var errorSE = 0;
    var errorPM = 0;
    var errorEE = 0;
    var errorRE = 0;
    var errors = [];
    var errorQuotient = 0;


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
    var addErrorCountEE = function($count){
      errorEE += $count;
    }
    var getErrorCountEE = function(){
      return errorEE;
    }
    var addErrorCountRE = function($count){
      errorRE += $count;
    }
    var getErrorCountRE = function(){
      return errorRE;
    }
    var setErrors = function(error){
      errors = error;
    }
    var getErrors = function(){
      return errors;
    }

	return {
		  addErrorCountMS: addErrorCountMS,
      getErrorCountMS: getErrorCountMS,
      addErrorCountSE: addErrorCountSE,
      getErrorCountSE: getErrorCountSE,
      addErrorCountPM: addErrorCountPM,
      getErrorCountPM: getErrorCountPM,
      addErrorCountEE: addErrorCountEE,
      getErrorCountEE: getErrorCountEE,
      addErrorCountRE: addErrorCountRE,
      getErrorCountRE: getErrorCountRE,
      
      setErrors: setErrors,
      getErrors: getErrors

  	};
});