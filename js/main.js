'use strict';

function isVowel(c){
	return "aeiou".indexOf(c) > -1;
}
function vowelsAndConsonants(s){
	if(!s){
		return;
	}

	for(var i = 0; i < s.length ; i++){
		var c = s.charAt(i);
		if(isVowel(c)){
			console.log(c);
		}
	}

	for(var i = 0; i < s.length ; i++){
		var c = s.charAt(i);
		if(!isVowel(c)){
			console.log(c);
		}
	}
	

}

function secondLargestInArray(nums){
	let uniqueNums = nums.filter((num, idx)=> nums.indexOf(num)===idx).sort(function(a, b){
		return parseInt(a) - parseInt(b);
	});
    console.log(uniqueNums);
    return uniqueNums[uniqueNums.length - 2];
}

function sides(literals, expressions) {
    if(expressions.length < 2){
        return;
    }
	let s = [];
	let length = parseFloat(expressions[0]);
	let width = parseFloat(expressions[1]);
    let area =  length * width ;
	let perimeter = 2*(length + width);
	s[0] = (perimeter + Math.sqrt(Math.pow(perimeter,2)-16*area))/4;
	s[1] = (perimeter - Math.sqrt(Math.pow(perimeter,2)-16*area))/4;
	return s.sort((a,b)=> parseFloat(a)-parseFloat(b));
}

function getInvalidELementIdx(sequence){
	var i, minElem, sequenceLen;
	sequenceLen = !!sequence ? sequence.length : 0;
	if(sequenceLen===0 || sequenceLen === 1){
		return -1;
	}
	minElem = parseInt(sequence[0]);
	for(i = 1; i < sequenceLen; i++){
		if(parseInt(sequence[i])-minElem <=0){
			return i-1;
		}
		minElem = parseInt(sequence[i]);
	}
	return -1;
}

function almostIncreasingSequence(sequence) {
    var sequenceLen , idx, count = 0;
	sequenceLen = !!sequence ? sequence.length : 0;
	if(sequenceLen===0){
		return true;
	}
	idx = getInvalidELementIdx(sequence);
    while(idx!==-1){
		sequence.splice(idx,1);
		count++;
		console.log(sequence);
		idx = getInvalidELementIdx(sequence);
	}
    return count <= 1;
}

//[1,2,3,4,5] , K = 9 ; 1+2+3+4
function listContiguousElementOfTargetSum(arr, target){
	var i, alen = !!arr.length?arr.length : 0;
	if(alen === 0){
		return 0;
	}
	
}

