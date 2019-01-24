var binarySearchRecursive = (function(){
	return function binarySearchRecursiveMethod(arr, item, start, end){
		var mid;
		if(!arr || arr.length ===0){
			return -1;
		}
		if(start <= end){
			mid = Math.floor((start + end)/2);
			if(arr[mid] === item){
				return mid;
			}
			if(arr[mid] > item){
				return binarySearchRecursiveMethod(arr,item,start, mid-1);
			}
			return binarySearchRecursiveMethod(arr,item,mid+1, end);	
		}
		return -1;
	}
})();

/**
 * Non recursive binary search method
 * @param {array} arr 
 * @param {number} searchItem 
 */
function binarySearch(arr, searchItem){
	var found = -1, l = 0, m, h = arr.length;
	while( l <= h){
		m = Math.floor((l + h)/2);
		if(arr[m]===searchItem){
			found = m;
			break;
		}
		if (arr[m] > searchItem){
			h = m - 1;
		} else {
			l = m + 1;
		}
	}	
	return found;
}

/**
 * Given a sorted array of N distinct integers, find floor value of input ‘key’. 
 * Say, A = {-1, 2, 3, 5, 6, 8, 9, 10} and key = 7, we should return 6 as outcome.
 * @param {array} arr 
 * @param {number} key 
 * @returns {number}
 */
function arrayFloor(arr, key){
	var mid, low = 0, high = arr.length;
	if(!arr || arr.length ===0 || key < arr[0]){
		return -1;
	}
	while ( (high - low) > 1){
		mid = Math.floor((low + high)/2);
		if(arr[mid] <= key){
			low = mid;
		}else{
			high = mid;
		}
	}
	return arr[low];
}
/**
 * Given a sorted array of N distinct integers, find ceil value of input ‘key’. 
 * Say, A = {-1, 2, 3, 5, 6, 8, 9, 10} and key = 7, we should return 8 as outcome.
 * @param {array} arr 
 * @param {number} key 
 * @returns {number}
 */
function arrayCeil(arr, key){
	var mid, low = 0, high = arr.length;
	if(!arr || arr.length ===0 || key < arr[0]){
		return -1;
	}
	while ( (high - low) > 1){
		mid = Math.floor((low + high)/2);
		if(arr[mid] <= key){
			low = mid;
		}else{
			high = mid;
		}
	}
	return arr[high];
}