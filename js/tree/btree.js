
var BTree =(function(){
	"use strict";

	function isUndefined(node){
		return node === undefined;
	}

	function isNull(node){
		return node === null;
	}

	function isUndefinedAndNull(node){
		return isUndefined(node) && isNull(node);
	}

	function isNodeType(node){
		return node instanceof Node;
	}

	function validateNode(node){
		return !isUndefinedAndNull(node) && isNodeType(node);
	}


	function traverseTreePreOrder(treeNode, orderArray){
		if(!!treeNode){
			orderArray.push(treeNode.data);
			traverseTreePreOrder(treeNode.left, orderArray);
			traverseTreePreOrder(treeNode.right, orderArray);
		}
	}

	function traverseTreeInOrder(treeNode, orderArray){
		if(!!treeNode){
			traverseTreeInOrder(treeNode.left, orderArray);
			orderArray.push(treeNode.value); 
			traverseTreeInOrder(treeNode.right, orderArray);
		}	
	}

	function traverseTreePostOrder(treeNode, orderArray){
		if(!!treeNode){
			traverseTreePostOrder(treeNode.left, orderArray);
			traverseTreePostOrder(treeNode.right, orderArray);
			orderArray.push(treeNode.value);
			
		}
	}
	

	function Node(data){
		this.left = undefined;
		this.right = undefined;
		this.data = data;
	};
	
	Node.prototype = Object.create(Object.prototype);
	
	Node.prototype.toString = function(){
		return "[left: "+this.left+", right: "+this.right+", data: "+this.data+"]";
	}
	/**
	 * BTree constructor
	 * @constructor
	 * @param {number} data 
	 */
	var BTree = function(data){
		this.root = new Node(data);
	};

	BTree.prototype = Object.create(Object.prototype);
	
	/**
	 * Add new node to the left of given parent node.
	 * @param {object} parentNode
	 * @param {number} data
	 * @returb {object}
	 */
	BTree.prototype.addLeftNode = function(parentNode, data){
		if(!validateNode(parentNode)){
			return;
		}
		parentNode.left = new Node(data);
		return parentNode.left;
	}

	/**
	 * Add new node to the right of given parent node.
	 * @param {object} parentNode
	 * @param {number} data
	 * @returb {object}
	 */	
	BTree.prototype.addRightNode = function(parentNode, data){
		if(!validateNode(parentNode)){
			return;
		}
		parentNode.right = new Node(data);
		return parentNode.right;
	}

	/**
	 * Search an element in a tree.
	 */
	BTree.prototype.search = function(data){
		var node = this.root;
		if(!validateNode(node)){
			return null;
		}
		if(node.data === data){
			return node;
		}else if(data < node.data){
			return this.search(data, node.left);
		}else{
			return this.search(data)
		} 
		
	}

	/**
	 * Traverse the binary in pre order i.e (Root -> Left -> Right).
	 * @param {object} node
	 */
	BTree.prototype.preOrder = function(node){
		var orderArray = [];
		traverseTreePreOrder(node, orderArray);
		return orderArray;
	}

	/**
	 * Traverse the binary in order i.e (Left -> Root -> Right). 
	 * @param {object} node
	 */
	BTree.prototype.inOrder = function(node){
		var orderArray = [];
		traverseTreeInOrder(node, orderArray);
		return orderArray;
	}

	/**
	 * Traverse the binary in post order i.e (Left -> Right -> Root)
	 * @param {object} node
	 */
	BTree.prototype.postOrder = function(node){
		var orderArray = [];
		traverseTreePostOrder(node, orderArray);
		return orderArray;
	}

	

	return BTree;
})();
