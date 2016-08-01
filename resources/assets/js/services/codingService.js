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
