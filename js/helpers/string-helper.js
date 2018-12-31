"use strict";
/**
 * Convert string to char arrays
 * @example "ABC" => ['A', 'B', 'C']
 * @param {string} str 
 */
function converStringToCharArray(str){
	if(str === undefined || str === null){
		return str;
	}
	return str.split("");
}

