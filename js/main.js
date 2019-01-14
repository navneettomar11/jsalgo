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

