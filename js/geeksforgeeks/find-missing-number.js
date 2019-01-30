/**
 * You are given a list of n-1 integers and these integers are in the range of 1 to n. 
 * There are no duplicates in list. One of the integers is missing in the list. 
 * @param {Array} arr 
 */
function findMissingNumber(arr){
	var len = !!arr ? arr.length : 0,i, rangeSum, total;
	if(len === 0){
		return 0;
	}

	rangeSum = (len * (len + 1))/2;
	sum = arr.reduce(function(previousValue, currentValue){
		return previousValue + currentValue;
	},0);
	return Math.abs(rangeSum - sum);


}