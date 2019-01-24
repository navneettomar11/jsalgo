describe("sorting algorithms", function(){

	describe("insertion sorting",function(){
		it("sort with valid data array", function(){
			var arr = [12, 11, 13, 5, 6];
			insertSort(arr);
			expect(arr).toEqual([5,6,11,12,13]);
		});

		it("recursive sort with valid data array", function(){
			var arr = [12, 11, 13, 5, 6];
			insertSortRecursive(arr, arr.length);
			expect(arr).toEqual([5,6,11,12,13]);
		});
	});	

	describe("selection sort", function(){
		it("sort with valid data array", function(){

		});
	});
});