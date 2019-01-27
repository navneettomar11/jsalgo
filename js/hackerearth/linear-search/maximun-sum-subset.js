function maximumSumSubsets(arr){
	var len,i,sum,  firstMaxSumSet, seconMaxSumSet;
	len = !!arr ? arr.length : 0;
	if(len === 0){
		return 0;
	}
	firstMaxSumSet = Math.max(0,arr[0]);
	for(i=1; i< len; i++){
		if(arr[i] < 0){
			continue;
		}
		console.log(arr[i],"sum : "+firstMaxSumSet);
		sum =Math.max(arr[i], firstMaxSumSet + arr[i]);
		if(firstMaxSumSet < sum){
			seconMaxSumSet = firstMaxSumSet;
			firstMaxSumSet = sum;
		}
	}
	return [firstMaxSumSet, seconMaxSumSet];
}