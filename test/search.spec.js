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
	});
});