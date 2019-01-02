/**
 * Return common elements between these two arrays
 * @param {array} arr1 
 * @param {array} arr2 
 */
function arrayIntersection(arr1, arr2){
	if(arr1 === undefined || arr2 === undefined || arr1 === null || arr2 ===null){
		return arr1 || arr2;
	}
	return arr1.filter(function(elem){
		return arr2.indexOf(elem) !==-1;
	});
}