"use strict";

var linearSearch = (function linearSearch(){
	return function linearSearchMethod(arr, item){
		var idx , found = -1;
		if(!arr || arr.length === 0){
			return found;
		}
		for(idx = 0; idx < arr.length; idx++){
			if(arr[idx]===item){
				found = idx;
				break;
			}
		}
		return found;
	}
})();

var linearSearchRecursive = (function(){
	return function linearSearchRecursiveMethod(arr, item, length){
		if(length < 0){
			return -1;
		}
		if(arr[length - 1]=== item){
			return length - 1;
		}
		return linearSearchRecursiveMethod(arr, item, length -1);
	}
})();