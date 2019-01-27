/**
 * Search item in the array using Interpolation Search Algorithm.
 * @param {Array} arr 
 * @param {number} searchItem 
 * @returns {number} index of search item
 */
function interpolationSearch(arr, searchItem){
	var low, high, pos;
	low = 0;
	high = !!arr ? arr.length -1: 0;
	while( (arr[low] !== arr[high]) &&  (searchItem >= arr[low] && searchItem <= arr[high])) {
		pos = low + ((searchItem - arr[low])* (high - low) / (arr[high] - arr[low]));

		if(arr[pos] === searchItem){
			return pos;
		}else if( arr[pos] < searchItem){
			low  = pos + 1;
		}else{
			high = pos - 1;
		}
	}
	if(arr[low]=== searchItem){
		return low;			
	}
	return -1;
}