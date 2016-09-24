myApp.service('errorService', function() {
  	var errorMS = 0;
    var errorSE = 0;
    var errorPM = 0;
    var errorIE = 0;
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
    var addErrorCountIE = function($count){
      errorIE += $count;
    }
    var getErrorCountIE = function(){
      return errorIE;
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
      addErrorCountIE: addErrorCountIE,
      getErrorCountIE: getErrorCountIE,
      
      setErrors: setErrors,
      getErrors: getErrors

  	};
});