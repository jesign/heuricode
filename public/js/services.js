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
    var isMultiplayer = false;
    var success = false;
    var time_limit = 0;
    var roomKey = null;
    var isWinner = false;
    var hasResult = false;
    var hasNewWeakness = false;
    var probDiff = null; 
    var problemDescription = null;

    var opponentname = null;

    var setOpponentName = function(name){
      opponentname = name;
    }
    var getOpponentName = function(){
      return opponentname;
    }
    var setProblemDescription = function(desc){
      problemDescription = desc;
    }
    var getProblemDescription = function(){
      return problemDescription;
    }
    var setHasResult = function(hr){
      hasResult = hr;
    }
    var getHasResult = function(){
      return hasResult;
    }
    var setIsMultiplayer = function(isMulti){
      isMultiplayer = isMulti;
    }
    var getIsMultiplayer = function(){
      return isMultiplayer;
    }
    var setRoomKey = function(rk){
      roomKey = rk;
    }
    var getRoomKey = function(){
      return roomKey;
    }
    var setIsWinner = function(isWin){
      isWinner = isWin;
    }
    var getIsWinner = function(){
      return isWinner;
    }
  	var setIsEnableCode = function(isEnable){
  		enableCode = isEnable;
  	}
  	var getIsEnableCode = function(){
  		return enableCode;
  	}
    var setProblemDifficulty = function(diff){
      probDiff = diff;
    }
    var getProblemDifficulty = function(){
      return probDiff;
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
    /* new weakness*/
    var setHasNewWeakness = function(hasNew){
      hasNewWeakness = hasNew;
    }
    var getHasNewWeakness = function(){
      return hasNewWeakness;
    }
    /* subject area */
    var setWeaknessId = function(id){
      weaknessId = id;
    }
    var getWeaknessId = function(){
      return weaknessId;
    }
    var setSuccess = function(isSuccess){
      success = isSuccess;
    }
    var getSuccess = function(){
      return success;
    }
    var setTimeLimit = function(time){
      time_limit = time;
    }
    var getTimeLimit = function(){
      return time_limit;
    }


	return {
      setOpponentName: setOpponentName,
      getOpponentName: getOpponentName,
      setProblemDescription: setProblemDescription,
      getProblemDescription: getProblemDescription,

      setRoomKey: setRoomKey,
      getRoomKey: getRoomKey,
      setIsMultiplayer: setIsMultiplayer,
      getIsMultiplayer: getIsMultiplayer,
      setIsWinner: setIsWinner,
      getIsWinner: getIsWinner,

      setHasResult: setHasResult,
      getHasResult: getHasResult,

  		setIsEnableCode: setIsEnableCode,
  		getIsEnableCode: getIsEnableCode,
	    setProblemCode: setProblemCode,
    	getProblemCode: getProblemCode,
      setProblemDifficulty: setProblemDifficulty,
      getProblemDifficulty: getProblemDifficulty,
    	setLanguage: setLanguage,
    	getLanguage: getLanguage,
      setHasNewWeakness: setHasNewWeakness,
      getHasNewWeakness: getHasNewWeakness,
      setWeaknessId: setWeaknessId,
      getWeaknessId: getWeaknessId,
      setSuccess: setSuccess,
      getSuccess: getSuccess,
      setTimeLimit: setTimeLimit,
      getTimeLimit: getTimeLimit
  };
});

myApp.service('errorService', function() {
  	var errorMS = 0;
    var errorSE = 0;
    var errorPM = 0;
    var errorIE = 0;
    var errors = [];
    var errorQuotient = 0;

    var clearErrors = function(){
      errorMS = 0;
      errorSE = 0;
      errorPM = 0;
      errorIE = 0;
    }
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
      clearErrors: clearErrors,
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
//# sourceMappingURL=services.js.map
