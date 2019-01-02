/**
 * @namespace
 */
"use strict";

var _helper = (function(){
	function addBinaryNode(node, value){
		if(node === undefined || node === value){
			node = new Node(value);
		}else if( value < node.value){
			node.left = addBinaryNode(node.left, value);
		}else if( value > node.value){
			node.right = addBinaryNode(node.right, value);
		}
		return node;
	}
	
	function traverseTreeInOrder(treeNode, orderArray){
		if(!!treeNode){
			traverseTreeInOrder(treeNode.left, orderArray);
			orderArray.push(treeNode.value); 
			traverseTreeInOrder(treeNode.right, orderArray);
		}	
	}
	
	function traverseTreePreOrder(treeNode, orderArray){
		if(!!treeNode){
			orderArray.push(treeNode.value);
			traverseTreePreOrder(treeNode.left, orderArray);
			traverseTreePreOrder(treeNode.right, orderArray);
		}
	}
	
	function traverseTreePostOrder(treeNode, orderArray){
		if(!!treeNode){
			traverseTreePostOrder(treeNode.left, orderArray);
			traverseTreePostOrder(treeNode.right, orderArray);
			orderArray.push(treeNode.value);
			
		}
	}
	
	function getMaxDepth(treeNode){
		var lDepth, rDepth;
		if(!validateBinaryTree(treeNode)){
			return 0;
		}
		lDepth = getMaxDepth(treeNode.left);
		rDepth = getMaxDepth(treeNode.right);
		return Math.max(lDepth, rDepth) + 1;
	}
		
	function validateBinaryTree(treeNode){
		return !!treeNode;
	}	
	return{
		validateBinaryTree: validateBinaryTree,
		getMaxDepth: getMaxDepth,
		traverseTreeInOrder: traverseTreeInOrder,
		traverseTreePostOrder: traverseTreePostOrder,
		traverseTreePreOrder: traverseTreePreOrder,
		addBinaryNode: addBinaryNode
	};
})();

/**
 * Represent tree node
 * @constructor 
 */
var Node = function(value){
	this.value = value;
	this.left = undefined;
	this.right = undefined;
};
	
/**
 * Repesent a BinaryTree
 * @constructor
 */
function BinaryTree(){
	this.root = undefined;
}

/**
 *  Insert node to the tree
 * @param {number} value 
 */
BinaryTree.prototype.addNode = function(value){
	if(value === undefined || value === null){
		throw new Error('Undefined/ Null values are not allowed');
	}
	this.root = _helper.addBinaryNode(this.root, value);
	return this;
};

/**
 * Binary tree inorder traverse : Left -> Root -> Right
 */
BinaryTree.prototype.inOrder = function(){
	var inOrderArray = [];
	if(_helper.validateBinaryTree(this.root)){
		_helper.traverseTreeInOrder(this.root.left, inOrderArray);
		inOrderArray.push(this.root.value);
		_helper.traverseTreeInOrder(this.root.right, inOrderArray);
	}
	return inOrderArray;
};

/**
 * Binary tree preorder : Root -> Left -> Right
 */
BinaryTree.prototype.preOrder = function(){
	var preOrderArray = [];
	if(_helper.validateBinaryTree(this.root)){
		preOrderArray.push(this.root.value);
		_helper.traverseTreePreOrder(this.root.left, preOrderArray);
		_helper.traverseTreePreOrder(this.root.right, preOrderArray);
	}
	return preOrderArray;
};

/**
 * Binary tree postorder: Left -> Right --> Root
 */
BinaryTree.prototype.postOrder = function(){
	var postOrderArray = [];
	if(_helper.validateBinaryTree(this.root)){
		_helper.traverseTreePostOrder(this.root.left, postOrderArray);
		_helper.traverseTreePostOrder(this.root.right, postOrderArray);
		postOrderArray.push(this.root.value);
	}
	return postOrderArray;
};

/**
 * Get Height of tree. The height of a node is the largest number of edges in a path from that node to a leaf node.
 * The height of a binary tree is the largest number of edges in a path from the root node to a leaf node. Essentially, it is the height of the root node.
 *  Note that if a tree has only one node, then that node is at the same time the root node and the only leaf node, so the height of the tree is 0. On the other hand, if the tree has no nodes, it’s height is -1.
 */
BinaryTree.prototype.getHeight = function(){
	if(!_helper.validateBinaryTree(this.root)){
		return -1;
	}
	return _helper.getMaxDepth(this.root) - 1;
};

/**
 * Top view of a binary tree is the set of nodes visible when the tree is viewed from the top. 
*/
BinaryTree.prototype.topView = function(){
	var treeNodeQueue = [], topViewNodeMap = {}, treeNode, topViewKeys, topView = [];

	if(!_helper.validateBinaryTree(this.root)){
		return topView;
	}
	treeNodeQueue.push({node: this.root, distanceFromRoot: 0});

	while(treeNodeQueue.length !==0){
		treeNode = treeNodeQueue.shift();
		if(!topViewNodeMap.hasOwnProperty(treeNode.distanceFromRoot)){
			topViewNodeMap[treeNode.distanceFromRoot] = treeNode.node;
		}
		if(!!treeNode.node.left){
			treeNodeQueue.push({node: treeNode.node.left, distanceFromRoot: parseInt(treeNode.distanceFromRoot) - 1});
		}
		if(!!treeNode.node.right){
			treeNodeQueue.push({node: treeNode.node.right, distanceFromRoot: parseInt(treeNode.distanceFromRoot) + 1});
		}
	}
	topViewKeys = Object.keys(topViewNodeMap).sort(function(a, b){
		return parseInt(a) - parseInt(b);
	});

	topViewKeys.forEach(function(topViewNode){
		topView.push(topViewNodeMap[topViewNode].value);
	});
	
	return topView;
};

/**
 * Level Order Traversal
 */
BinaryTree.prototype.levelOrderTraversal = function(){
	var levelOrderTraversal = [], treeNodeQueue = [], treeNode;
	if(!_helper.validateBinaryTree(this.root)){
		return levelOrderTraversal;
	}
	treeNodeQueue.push(this.root);
	while(treeNodeQueue.length!== 0){
		treeNode = treeNodeQueue.shift();	
		levelOrderTraversal.push(treeNode.value);
		if(!!treeNode.left){
			treeNodeQueue.push(treeNode.left);
		}
		if(!!treeNode.right){
			treeNodeQueue.push(treeNode.right);
		}
	}
	return levelOrderTraversal;
}

/**
 * Lowest Common Ancestor - both v1 and v2 descendants have lowest common ancestor
 * @param {number} v1 first vertice
 * @param {number} v2 second vertice
 * @returns {object} node
 */
BinaryTree.prototype.lowestCommonAncestor = function(v1, v2){
	var vertices = [v1, v2], 
		verticePathMap={}, pathList, 
		tempNode, commonNodes, minHeightNode,
		nodeHeight, ancestorNode, verticeFound, i,_self = this;
	if(!_helper.validateBinaryTree(this.root)){
		return null;
	}	
	for(i = 0; i < vertices.length; i++){
		tempNode = this.root;
		verticeFound = false;
		pathList = [];
		while(_helper.validateBinaryTree(tempNode)){
			pathList.push(tempNode);
			if(tempNode.value === vertices[i]){
				verticeFound = true;
				break;
			}
			tempNode = vertices[i] < tempNode.value ? tempNode.left : tempNode.right;
		}
		if(verticeFound){
			verticePathMap[vertices[i]] = pathList;
		}
	}
	if(vertices.length!== Object.keys(verticePathMap).length)	{
		throw new Error("One of the vertices is missing in the tree");
	}
	commonNodes = arrayIntersection(verticePathMap[v1], verticePathMap[v2]);
	if(commonNodes){
		minHeightNode = -1;
		commonNodes.forEach(function(node){
			nodeHeight = _self.getHeight(node);
			if(minHeightNode === -1 || minHeightNode < nodeHeight){
				minHeightNode = nodeHeight;
				ancestorNode = node;
			}
		});
	}
	return ancestorNode;
}

/**
 * Check tree is Binary Search Tree
 * @returns {boolean}
 */
BinaryTree.prototype.isBST = function(){

}

