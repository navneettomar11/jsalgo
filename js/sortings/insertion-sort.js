"use strict";

var insertSort = (function insertionSortName(){
	return function insertSort(arr){
		var idx, jdx, pickElem;
		if(!arr || arr.length === 0) {
			return arr;
		}
		for(idx = 1; idx <= arr.length - 1; idx++) { 
			pickElem = arr[idx];
			jdx = idx - 1;
			while(jdx >= 0 && arr[jdx] > pickElem){
				arr[jdx + 1] = arr[jdx];
				jdx--;
			}
			arr[jdx+1] = pickElem;
		}
	}
})();