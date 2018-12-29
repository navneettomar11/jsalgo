/**Find the K-th Max/Min in an Array.*/
'use strict';
function findKMaxInaArray(arr, minIdx, maxIdx, k){
	var temp, idx, pivotIdx = minIdx;
	if(minIdx >= maxIdx){
		return arr[minIdx];
	}
	for(idx = minIdx; idx < maxIdx; idx++){
		if(arr[idx] > arr[maxIdx]){
			temp = arr[idx];
			arr[idx] = arr[pivotIdx];
			arr[pivotIdx] = temp;
			pivotIdx++;
		}
	}
	temp = arr[pivotIdx];
  	arr[pivotIdx] = arr[maxIdx];
	arr[maxIdx] = temp;

	if( k > pivotIdx){
		return findKMaxInaArray(arr, pivotIdx+1, maxIdx, k);
	}else if ( k < pivotIdx){
		return findKMaxInaArray(arr, minIdx, pivotIdx - 1 , k);
	}
	return arr[pivotIdx];  
}

function findKMinInaArray(arr, k){
	arr.sort();
	if (k < arr.length){
		return arr[k];
	}
	return arr[0];
}