myApp.service('rankService', function() {
 	var rankSCS = 0, 
 		rankRCS = 0,
 		rankARR = 0;

 	var setRankSCS = function($rank){
 		rankSCS = $rank;
 	}
 	var getRankSCS = function(){
 		return rankSCS;
 	}
 	var setRankRCS = function($rank){
 		rankRCS = $rank;
 	}
 	var getRankRCS = function(){
 		return rankRCS;
 	}
 	var setRankARR = function($rank){
 		rankARR = $rank;
 	}
 	var getRankARR = function(){
 		return rankARR;
 	}

 	return {
 		setRankSCS: setRankSCS,
 		getRankSCS: getRankSCS,
 		setRankRCS: setRankRCS,
 		getRankRCS: getRankRCS,
 		setRankARR: setRankARR,
 		getRankARR: getRankARR,
 	}

});
myApp.service('codingService', function() {
  	var enableCode = false;
  	var problemCode = null;
  	var languageId = null;
    var weaknessId = null;

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
    var setWeaknessId = function($id){
      weaknessId = $id;
    }
    var getWeaknessId = function(){
      return weaknessId;
    }

	return {
  		setIsEnableCode: setIsEnableCode,
  		getIsEnableCode: getIsEnableCode,
	    setProblemCode: setProblemCode,
    	getProblemCode: getProblemCode,
    	setLanguage: setLanguage,
    	getLanguage: getLanguage,
      setWeaknessId: setWeaknessId,
      getWeaknessId: getWeaknessId

  };
});

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
//# sourceMappingURL=services.js.map
