function smallestNumberRepeatKTimes(arr, k){
	var i, count, smallestNumber, len = !!arr ? arr.length : 0;
	if(len === 0) {
		return 0;
	}

	function sort(arr){
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

	sort(arr);
	if(k === 1){
		return arr[0];
	}
	count = 1;
	smallestNumber = arr[0];
	for(i = 1; i < len; i++) {
		if(smallestNumber === arr[i]){
			count++;
		}else {
			count = 1;
			smallestNumber = arr[i];
		}
		if(count === k){
			break;
		}
	}
	return smallestNumber;
}