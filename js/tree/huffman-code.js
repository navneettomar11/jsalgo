"use strict";

/**
 * @constructor
 */
function HuffmanCode(){}

HuffmanCode.prototype = Object.create(Object.prototype);


/**
 *  Count character frequency in the given character array.
 * @param {array} charArray  The array of character
 *  @returns Return associate array;
 */
HuffmanCode.prototype.getCharacterFrequency = function(charArray){
	var characterFrequencyList = [], node;
	if(charArray && charArray.length > 0){
		charArray.forEach(function(char){
			node = characterFrequencyList.filter(function(nde){
				return nde.data === char;
			}).pop();
			if(!node){
				characterFrequencyList.push({
					data: char,
					freq: 1,
					left: undefined,
					right: undefined
				});

			}else{
				node.freq+=1;
			}
		});	
	}
	characterFrequencyList.sort(function(a, b){
		return a.freq - b.freq;
	});

	return characterFrequencyList;
}

/**
 * Create Huffman code tree
 */
HuffmanCode.prototype.createEncodeTree = function(str){
	var characterFrequencyList,strCharArray, firstNode, secondNode, nwNode;
	// Convert given string into character array
	strCharArray  = converStringToCharArray(str);
	//Getting character frequency in the string
	characterFrequencyList = this.getCharacterFrequency(strCharArray);

	while(characterFrequencyList.length > 1){
		firstNode = characterFrequencyList.shift();
		secondNode = characterFrequencyList.shift();
		nwNode = {
			data : firstNode.data + secondNode.data,
			freq : firstNode.freq + secondNode.freq,
			left: firstNode,
			right: secondNode
		};
		characterFrequencyList.push(nwNode);
		characterFrequencyList.sort(function(a, b){
			return a.freq - b.freq || 
			(b.data.length - a.data.length) ||
			(a.data < b.data ? -1 : a.data > b.data ? 1 : 0);
		});
	}
	return characterFrequencyList.pop();
}

/**
 *  Print Huffman code tree.
 */
HuffmanCode.prototype.printTree = function(tree, printList){
	if(tree === undefined || tree === null){
		return;
	}
	if(tree.left !== null && tree.right !==null){
		printList.push(tree.data);
	}
	this.printTree(tree.left, printList);
	this.printTree(tree.right, printList);
	return printList;
}

/**
 * Create Huffman code table
 * @param {object} tree
 * @param {boolean} reverse
 * @param {string} prefix
 */
HuffmanCode.prototype.createEncodeTableCode = function(tree, prefix){
	if(tree === undefined || tree === null){
		return;
	}
	var tableCode = {};
	if(tree.left  && tree.right ){
		mixin(tableCode, this.createEncodeTableCode(tree.left,!!prefix?prefix + '0': '0'));
		mixin(tableCode, this.createEncodeTableCode(tree.right,!!prefix?prefix + '1':'1'));
	}else if(!tree.left && !tree.right){
			tableCode[tree.data] = prefix;
	}
	return tableCode;
}

/**
 * Encode string using huffman code algorithim
 * @param {string} str 
 */
HuffmanCode.prototype.encode = function(str){
	var tree, tableCodeObj, idx, character, encodeStr='';
	if(str === undefined || str === null){
		return str;
	}
	tree = this.createEncodeTree(str);
	tableCodeObj = this.createEncodeTableCode(tree);
	for(idx = 0; idx < str.length; idx++){
		character = str.charAt(idx);
		encodeStr+=tableCodeObj[character];
	}
	return encodeStr;	
}

/**
 * Decode the string using huffman code algorithm
 * @param {string} decodeString
 * @param {object} huffmanCodeTree
 */
HuffmanCode.prototype.decode = function(decodedString, huffmanTreeRootNode){
	var tempNode, idx, c, encodedString = '';
	if(decodedString === undefined || decodedString === null){
		return decodedString;
	}
	if(huffmanTreeRootNode === undefined || huffmanTreeRootNode === null){
		return encodedString;
	}
	tempNode = huffmanTreeRootNode;
	for(idx = 0; idx < decodedString.length; idx ++){
		c = decodedString.charAt(idx);
		
		if(c === '1'){
			tempNode = tempNode.right;
		}else if(c === '0'){
			tempNode = tempNode.left;
		}else{
			throw new Error("Invalid decoded string");
		}
		//checking node is a leaf node
		if(!tempNode.right && !tempNode.left){
			encodedString+=tempNode.data;
			tempNode = huffmanTreeRootNode; //move back to root node;
		}
		
	
	}
	return encodedString;
	
}