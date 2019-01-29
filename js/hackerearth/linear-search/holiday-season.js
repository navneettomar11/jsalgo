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
	var cCount = 0, bCCount;
	for(i = 0; i < len; i++){
		var aIdx = i;
		console.log("A:::>>> "+str[aIdx]+" --- "+aIdx);
		var cIdx = searchNextIdx(str, len, aIdx + 2, str[aIdx]);
		console.log(str[cIdx]+" --- "+cIdx);
		if(cIdx !== -1 && str[aIdx]===str[cIdx]){
			for(j=aIdx + 1; j < cIdx; j++){
				if(str[j]=== str[aIdx]){
					continue;
				}
				var dIdx = searchNextIdx(str, len, cIdx + 1, str[j]);
				if(dIdx !== -1 && str[j] === str[dIdx]){
					//console.log(" b : "+dIdx+" d: "+j);
					count++;
				}
			}
		}	
		
	}
	console.log("CCount :::: >>>> "+cCount);
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
