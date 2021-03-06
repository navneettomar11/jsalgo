describe('hackerearth linear search problems',function(){

	it('monk takes a walk', function(){
		expect(countTreeNotInGoodState('nBBZLaosnm')).toEqual(2);
		expect(countTreeNotInGoodState('JHkIsnZtTL')).toEqual(1);
	});

	it('easy-sum-set-problem', function(){
		expect(getSetFromSumSet([1,2],[3,4,5])).toEqual([2,3]);
	});

	it('maximun sum set', function(){
		expect(maximumSumSubsets([1,2,-4,-2,3])).toEqual([6,3]);
	});

	it('find smallest number repeat k times', function(){
		expect(smallestNumberRepeatKTimes([1,1,2,2,2,2,3,3,4,4],4)).toEqual(2);
	});

	xit("holiday season",function(){
		//expect(holidaySeason('ababa')).toEqual(2);
		expect(holidaySeason('hylobclddzflmzitrxwwsqhozvgexhxjmm')).toEqual(36);
	});

	it('special sho', function(){
		expect(specialShop(5,1,2)).toEqual(17);
	});
});