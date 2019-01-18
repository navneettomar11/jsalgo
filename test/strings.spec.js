describe('testing string algorithms',function(){
	it("test number of words in camelcase string", function(){
		expect(countWordInCamelCase("saveChangesInTheEditor")).toEqual(5);
	});
	it("test number of words in undefined camelcase string", function(){
		expect(countWordInCamelCase()).toEqual(-1);
	});
	it("test countWordInCamelCase method when argument is not string", function(){
		expect(function(){ countWordInCamelCase(123456)}).toThrow(new Error("only sting values are allowed"));
	});
});