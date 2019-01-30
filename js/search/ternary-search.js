/**
 * Search item in sorted array using ternary search
 * @param {Array} arr 
 * @param {number} searchItem 
 */
function tenarySearch(arr, searchItem){
	function search(arr, l, r, x){
		var mid1, mid2;
		if(r >= l){
			mid1 = Math.floor(l + (r - l)/3);
			mid2 =  Math.floor(mid1 + (r - l)/3);
			console.log(mid1, mid2);
			if(arr[mid1] === x){
				return mid1;
			}
			if(arr[mid2] === x){
				return mid2;
			}

			if(arr[mid1] > x) {
				return search(arr, l, mid1 -1, x);
			}

			if(arr[mid2] < x){
				return search(arr,mid2+1, r, x);
			}
			return search(arr, mid1+1, mid2-1, x);
		}
		return -1;
	}
	return search(arr,0, arr.length, searchItem);
}