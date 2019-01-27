function isVowel(ch){
	return ch ==='a' || ch==='e' || ch==='i' || ch ==='o' || ch ==='u';
}
function countTreeNotInGoodState(str){
	var idx, count;
	if(!str || str.length=== 0){
		return 0;
	}
	count = 0;
	str = str.toLowerCase();
	for(idx = 0; idx < str.length; idx++){
		if(isVowel(str.charAt(idx))){
			count++;
		}
	}
	return count;
}