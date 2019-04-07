function bubbleSort(nums){
	var i,j, temp, len = !!nums ? nums.length : 0;
	if(len === 0) {
		return;
	}
	for(i =0; i < len; i++){
		for(j = 0; j < len - 1; j++){
			if(nums[j] > nums[j+1]){
				nums[j] = nums[j] + nums[j+1];
				nums[j+1] = nums[j] - nums[j+1];
				nums[j] = nums[j] - nums[j+1];
			}
		}
	}
}