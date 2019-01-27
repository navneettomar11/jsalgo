function exponentialSearch(arr, searchItem){
	var idx, len = !!arr ? arr.length: 0;
	if(len === 0){
		return -1;
	}
	idx = 1;
	if(arr[idx-1]===searchItem){
		return idx;
	}
	while(idx < len && arr[idx] <= searchItem){
		idx*=2;
	}
	return exponentialBinarySearch(arr, searchItem, idx/2, Math.min(idx/2, len));
}

function exponentialBinarySearch(arr, searchItem, start, end){
	var mid;
	if(end >= start){
		mid = (start + end) /2;
		if(arr[mid] === searchItem){
			return mid;
		}
		if(arr[mid] < searchItem){
			return exponentialBinarySearch(arr, screen, start, mid-1);
		}
		return exponentialBinarySearch(arr, screen, mid+1, end);
	}
	return -1;
}
