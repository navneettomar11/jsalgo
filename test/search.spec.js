describe('searching algorithms', function(){

	describe("linear search", function(){
		it('search existing item in define array',function(){
			var arr = [2, 3, 4, 10, 40];
			var searchItem = 10;
			var found = linearSearch(arr,searchItem);
			expect(found).toEqual(3);
		});
		it('search non existing item in define array',function(){
			var arr = [2, 3, 4, 10, 40];
			var searchItem = 100;
			var found = linearSearch(arr,searchItem);
			expect(found).toEqual(-1);
		});
		it('search existing item in define array using recursive method',function(){
			var arr = [2, 3, 4, 10, 40];
			var searchItem = 10;
			var found = linearSearchRecursive(arr,searchItem, arr.length);
			expect(found).toEqual(3);
		});
		it('search non existing item in define array using recursive method',function(){
			var arr = [2, 3, 4, 10, 40];
			var searchItem = 100;
			var found = linearSearchRecursive(arr,searchItem, arr.length);
			expect(found).toEqual(-1);
		});
	});

	describe("binary search", function(){
		it('search existing item in valid data structure using recursive method',function(){
			var arr = [2, 3, 4, 10, 40];
			var searchItem = 10;
			var found = binarySearchRecursive(arr,searchItem, 0, arr.length-1);
			expect(found).toEqual(3);
		});
		it('search non existing item in valid data structure using recursive method',function(){
			var arr = [2, 3, 4, 10, 40];
			var searchItem = 100;
			var found = binarySearchRecursive(arr,searchItem, 0, arr.length-1);
			expect(found).toEqual(-1);
		});
		it('search existing item in valid data structure ',function(){
			var arr = [2, 3, 4, 10, 40];
			var searchItem = 10;
			var found = binarySearch(arr,searchItem);
			expect(found).toEqual(3);
		});
		it('search non existing item in valid data structure',function(){
			var arr = [2, 3, 4, 10, 40];
			var searchItem = 100;
			var found = binarySearch(arr,searchItem);
			expect(found).toEqual(-1);
		});
		it('array floor using binary search', function(){
			var arr = [-1,2,3,5,6,8,9,10];
			var key = 7;
			expect(arrayFloor(arr, key)).toEqual(6);
		});
		it('array ceil using binary search', function(){
			var arr = [-1,2,3,5,6,8,9,10];
			var key = 7;
			expect(arrayCeil(arr, key)).toEqual(8);
		});

		it('find missing element in the sorted array', function(){
			expect(findMissingNumberInArray([5,6,11,12])).toEqual(7);
		});
	});
	describe("jump search",function(){
		it("search item in valid data structure", function(){
			var arr = [1, 3, 5, 7, 9, 11, 13, 15];
			expect(jumpSearch(arr,0)).toEqual(-1);
			expect(jumpSearch(arr,3)).toEqual(1);
		});
	});

	describe("interpolation search", function(){
		it("search item in valid data structure", function(){
			var arr = [1, 3, 5, 7, 9, 11, 13, 15];
			expect(interpolationSearch(arr,0)).toEqual(-1);
			expect(interpolationSearch(arr,3)).toEqual(1);
		});
	});
	describe("exponential search", function(){
		it("search item in valid data structure", function(){
			var arr = [1, 3, 5, 7, 9, 11, 13, 15];
			expect(exponentialSearch(arr,0)).toEqual(-1);
			expect(exponentialSearch(arr,3)).toEqual(1);
		});
	});
});