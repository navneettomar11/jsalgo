describe("main.js", function(){
	it('test vowelsAndConsonants',function(){
		expect(sides('',[10,14])).toEqual([10,14]);
	});
	
	it("test second largest number in array", function(){
		expect(secondLargestInArray([1,2,3,4,5,6,7,8,9,10])).toEqual(9);
		expect(secondLargestInArray([10,9,9,8,8,11,8,0,9,1])).toEqual(10);

	});

	xit('almostIncreasingSequence',function(){
		/*expect(almostIncreasingSequence([1, 2, 1, 2])).toEqual(false);
		expect(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15 ])).toEqual(false);
		expect(almostIncreasingSequence([1, 1, 2, 3, 4, 4 ])).toEqual(false);
		expect(almostIncreasingSequence([1,3,2])).toEqual(true);
		expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5])).toEqual(true);*/
		expect(almostIncreasingSequence([1, 2, 3, 4, 3, 6])).toEqual(true);
	});

	xit('listContiguousElementOfTargetSum', function(){
		expect(listContiguousElementOfTargetSum([1, 2, 3, 4, 5],9)).toEqual([]);
	})
});
