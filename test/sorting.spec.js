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

	describe("bubble sort", function(){
		it("sort with undefined array", function(){
			var nums = undefined;
			bubbleSort(nums);
			expect(nums).toBeUndefined();
		});
		it("sort with blank array", function(){
			var nums = [];
			bubbleSort(nums)
			expect(nums).toEqual(nums);
		});
		it("sort with valid array", function(){
			var nums = [12, 11, 13, 5, 6];
			bubbleSort(nums);
			expect(nums).toEqual([5,6,11,12,13]);
		});
	});
});