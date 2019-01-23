function generateAnagrams(str, st, ed, anagrams){
	var idx;
	if(st === ed){
		anagrams.push(str);
		return;
	}

	for(idx = st; idx <= ed; idx++){
		str = swap(str, st, idx);
		generateAnagrams(str,st+1, ed, anagrams);
		str = swap(str, st, idx);
	}	
}

function swap(str, fromIdx, toIdx){
	var tempChar;
	var charArray = str.split('');
	tempChar = charArray[fromIdx];
	charArray[fromIdx] = charArray[toIdx];
	charArray[toIdx] = tempChar;
	return charArray.join('');
}