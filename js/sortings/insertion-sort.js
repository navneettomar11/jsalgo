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
	};
})();

var insertSortRecursive = (function insertSortRecursiveName(){
	return function insertSortRecursive(arr, n){
		if(n=== undefined || n<= 1 ) {
			return;
		}
		insertSortRecursive( arr, n-1 );
		var last = arr[n-1];
		var j = n - 2;
		while( j >= 0 && arr[j] > last){
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = last;
	};
})();


var binaryInsertionSort = (function(){
	return function binaryInsertionSort(arr) {

	};
})();