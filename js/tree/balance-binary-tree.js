var balanceTree = (function(){
	
	function storeNodeInOrder(node, nodes){
		if(!!node){
			storeNodeInOrder(node.left, nodes);
			nodes.push(node);
			storeNodeInOrder(node.right, nodes);
		}
	}

	function buildTree(nodes, start, end){
		if(nodes.length === 0 || start > end ){
			return;
		}
		var mid = parseInt((start + end)/2);
		var node = nodes[mid];
		node.left = buildTree(nodes, start, mid -1);
		node.right = buildTree(nodes, mid + 1, end);
		return node;
	}

	var buildBalanceTree = function(bTree){
		var nodes = [];
		storeNodeInOrder(bTree.root, nodes);
		return buildTree(nodes, 0, nodes.length-1);
	};
	
	return buildBalanceTree;

})();
