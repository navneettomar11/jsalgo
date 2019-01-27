function getSetFromSumSet(setA, setC){
	var idx, jdx, lenA, lenC, setB = [], diff;
	lenA = !!setA ? setA.length : 0;
	lenC = !!setC ? setC.length : 0;
	for(idx = 0; idx < lenC; idx++){
		for(jdx = 0 ; jdx < lenA; jdx++){
			diff = setC[idx] - setA[jdx];
			if(setB.indexOf(diff)===-1 && checkSumExists(setA, setC, diff)){
				setB.push(diff);
			}
		}
	}
	return setB;
}


function checkSumExists(setA, setC ,numB){
	var idx,  sumSet=[], exists = true;
	for(idx = 0; idx < setA.length; idx++){
		sumSet.push(setA[idx]+numB);
	}
	for(idx=0; idx< sumSet.length; idx++){
		exists = setC.indexOf(sumSet[idx]) !== -1;
		if(!exists){
			break;
		}
	}
	return exists;
}