/**
 * Unit test for binary tree
 */
describe('binary tree',function(){
	var binaryTree;
	
	beforeEach(function(){
		binaryTree = new BinaryTree();
	})
	afterEach(function(){
		binaryTree = undefined;
	});

	describe("add node in binary tree",function(){
		it('blank binary tree', function(){
			expect(binaryTree.inOrder()).toEqual([]);
		});
		it('add new undefined node in tree', function(){
			expect(function(){ binaryTree.addNode(undefined)} ).toThrow(new Error("Undefined/ Null values are not allowed"));
		});
		it('add new null node in tree', function(){
			expect(function(){ binaryTree.addNode(null)} ).toThrow(new Error("Undefined/ Null values are not allowed"));
		});
		it('add new node when tree is blank', function(){
			var rootNode = binaryTree.addNode(5);
			expect(rootNode).not.toBeNull();
		});
		it('add new node which value greater than root', function(){
			binaryTree.addNode(1).addNode(2);
			expect(binaryTree.inOrder()).toEqual([1,2]);
			binaryTree.addNode(5);
			expect(binaryTree.inOrder()).toEqual([1,2,5]);
		});
		it('add new node which value less than root', function(){
			binaryTree.addNode(5).addNode(2);
			expect(binaryTree.inOrder()).toEqual([2,5]);
		});
		it('add new node which is equal to value of existing node', function(){
			binaryTree.addNode(5).addNode(2).addNode(3);
			expect(binaryTree.inOrder()).toEqual([2,3,5]);
			binaryTree.addNode(2);
			expect(binaryTree.inOrder()).toEqual([2,3,5]);
		});
	});
	describe('binary tree inorder traverse', function(){
		it('inorder traversal with blank data', function(){
			expect(binaryTree.inOrder()).toEqual([]);
		});
		it('inorder traversal with data', function(){
			binaryTree.addNode(1).addNode(2)
			.addNode(5).addNode(3)
			.addNode(6).addNode(4);
			expect(binaryTree.inOrder()).toEqual([1,2,3,4,5,6]);
		});
	});

	describe('binary tree post order traversal', function(){
		it('post order traversal with blank data', function(){
			expect(binaryTree.postOrder()).toEqual([]);
		});
		it('post order traversal with data ', function(){
			binaryTree.addNode(1).addNode(2)
			.addNode(5).addNode(3)
			.addNode(6).addNode(4);

			expect(binaryTree.postOrder()).toEqual([4,3,6,5,2,1]);
		});
	});

	describe('binary tree pre order traversal', function(){
		it('pre order traversal with blank data', function(){
			expect(binaryTree.preOrder()).toEqual([]);
		});
		it('pre order traversal with data', function(){
			binaryTree.addNode(1).addNode(2)
			.addNode(5).addNode(3)
			.addNode(6).addNode(4);

			expect(binaryTree.preOrder()).toEqual([1,2,5,3,4,6]);
		})
	});

	xdescribe('binary tree zigzag order traversal', function(){

	});

	describe('binary tree height',function(){
		it('get height of no node tree', function(){
			expect(binaryTree.getHeight()).toEqual(-1);
		});

		it('get height of single node tree', function(){
			binaryTree.addNode(1);
			expect(binaryTree.getHeight()).toEqual(0);
		});

		it('get height of the tree - dataset01', function(){
			binaryTree.addNode(1).addNode(2)
			.addNode(5).addNode(3)
			.addNode(6).addNode(4);
			expect(binaryTree.getHeight()).toEqual(4);
		});

		it('get height of the tree - dataset02', function(){
			binaryTree.addNode(3).addNode(2)
			.addNode(5).addNode(1)
			.addNode(6).addNode(4).addNode(7);
			expect(binaryTree.getHeight()).toEqual(3);
		});
	});

	describe('binary tree top view', function(){
		it('top view when no node in tree', function(){
			expect(binaryTree.topView()).toEqual([]);
		});

		it("top view binary tree", function(){
			binaryTree.addNode(1).addNode(2)
			.addNode(5).addNode(3)
			.addNode(6).addNode(4);
			expect(binaryTree.topView()).toEqual([1,2,5,6]);
		});

		it("top view on large dataset binary tree", function(){
			var i, valueSet = [47,2,40,20,38,30,14,28,10,16,19,44,39,27,7,9,31,12,43,21,5,41,34,49,13,33,3,4,25,22,29,15,32,35,6,24,23,26,1,11,42,36,37,17,18,8,45,48,50,46];
			for(i = 0; i < valueSet.length; i++){
				binaryTree.addNode(valueSet[i]);
			}
			expect(binaryTree.topView()).toEqual([3,5,7,10,1,2,47,49,50,46,37]);
		});
	});

});