
var BTree =(function(){

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
	

	function Node(data){
		this.left = undefined;
		this.right = undefined;
		this.data = data;
	};
	
	Node.prototype = Object.create(Object.prototype);
	
	Node.prototype.toString = function(){
		return "[left: "+this.left+", right: "+this.right+", data: "+this.data+"]";
	}
	
	var BTree = function(value){
		this.root = new Node(value);
	};
	BTree.prototype = Object.create(Object.prototype);
	
	BTree.prototype.addLeftNode = function(parentNode, data){
		if(!validateNode(parentNode)){
			return;
		}
		parentNode.left = new Node(data);
		return parentNode.left;
	}

		
	BTree.prototype.addRightNode = function(parentNode, data){
		if(!validateNode(parentNode)){
			return;
		}
		parentNode.right = new Node(data);
		return parentNode.right;
	}

	BTree.prototype.preOrder = function(node){
		var orderArray = [];
		traverseTreePreOrder(node, orderArray);
		return orderArray;
	}

	return BTree;
})();
