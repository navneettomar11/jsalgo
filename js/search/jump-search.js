/**
 *  Search item in a sorted array using Jump Search Algorithm
 * @param {Array} arr 
 * @param {number} searchItem 
 */
function jumpSearch(arr, searchItem){
	var len, jump, left, right, idx;
	len = !!arr ? arr.length : 0;
	if(len <= 0){
		return -1;
	}
	jump = Math.floor(Math.sqrt(len));
	left = 0;
	while( left < len && arr[left] <= searchItem){
		right = Math.min(len - 1, left + jump);
		if(arr[left] <= searchItem && arr[right]>= searchItem){
			break;
		}
		left+=jump;
	}

	if(left >= len || arr[left] > searchItem){
		return -1;
	}
	right = Math.min(len-1, right);
	for(idx = left; idx <= right && arr[idx] <=searchItem; idx++) {
		if(arr[idx]===searchItem) {
			return idx;
		 }
	}
	return -1;
}