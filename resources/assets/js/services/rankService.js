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