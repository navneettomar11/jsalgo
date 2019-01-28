function holidaySeason(str){
	var count, i,j, len = !!str ? str.length: 0;
	if(len === 0){
		return 0;
	}
	function searchNextIdx(str,len, stIdx, searchChar){
		var i;
		for(i= stIdx; i < len ; i++){
			if(str.charAt(i) === searchChar){
				return i
			}
		}	
		return -1;	
	}
	count = 0;
	for(i = 0; i < len; i++){
		var aIdx = i;
		var bIdx = aIdx + 1;
		var cIdx = searchNextIdx(str, len, bIdx + 1, str[aIdx]);
		if(cIdx !== -1 && str[aIdx]===str[cIdx]){
			console.log(" a : "+aIdx+" c: "+cIdx);
			for(j=cIdx+1; j < len; j++){
				if(str[j]=== str[aIdx]){
					continue;
				}
				var dIdx = searchNextIdx(str, cIdx, aIdx + 1, str[j]);
				if(dIdx !== -1 && str[j] === str[dIdx]){
					console.log(" b : "+dIdx+" d: "+j);
					count++;
				}
			}
		}	
		
	}
	return count;
}

function holidaySeason2(str){
	var count, i, len = !!str ? str.length: 0;
	if(len === 0){
		return 0;
	}
	count = 0;
	for(var a = 0; a < len; a++){
		for(var b = a+1; b < len; b++){
			for(var c = b+1; c < len ; c++){
				for(var d = c+1; d < len; d++){
					if(str[a]=== str[c] && str[b]===str[d]){
						//console.log(str[a], str[b], str[c], str[d]);
						count++;
					}
				}
			}
		}
	}
	return count;
}
