describe("main.js", function(){
	it('test vowelsAndConsonants',function(){
		expect(sides('',[10,14])).toEqual([10,14]);
	});
	
	it("test second largest number in array", function(){
		expect(secondLargestInArray([1,2,3,4,5,6,7,8,9,10])).toEqual(9);
		expect(secondLargestInArray([10,9,9,8,8,11,8,0,9,1])).toEqual(10);

	});
});
