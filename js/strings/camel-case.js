/**
 * 
 * @param {string} s 
 * @returns {number}
 */
function countWordInCamelCase(s){
	if(s===undefined || s===null){
		return -1;
	}
	if(typeof s !== "string"){
		throw new Error("only sting values are allowed");
	}
	var pattern = /[A-Z]/;
	return s.split(pattern).length;
}