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
});