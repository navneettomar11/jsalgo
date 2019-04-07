function isPalindrome(word){
	if(!!word){
		word = word.toLowerCase();
		return word === reverseWord(word);
	}
	return false;
}

function reverseWord(word){
	if(word.length === 1){
		return word;
	}
	var endIdx = word.length -1;
	return word.charAt(endIdx) + reverseWord(word.substring(0, endIdx));
}