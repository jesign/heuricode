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
      setRoomKey: setRoomKey,
      getRoomKey: getRoomKey,
      setIsMultiplayer: setIsMultiplayer,
      getIsMultiplayer: getIsMultiplayer,
      setIsWinner: setIsWinner,
      getIsWinner: getIsWinner,

  		setIsEnableCode: setIsEnableCode,
  		getIsEnableCode: getIsEnableCode,
	    setProblemCode: setProblemCode,
    	getProblemCode: getProblemCode,
    	setLanguage: setLanguage,
    	getLanguage: getLanguage,
      setWeaknessId: setWeaknessId,
      getWeaknessId: getWeaknessId,
      setSuccess: setSuccess,
      getSuccess: getSuccess,
      setTimeLimit: setTimeLimit,
      getTimeLimit: getTimeLimit
  };
});
