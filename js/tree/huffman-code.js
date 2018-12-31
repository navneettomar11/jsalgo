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
HuffmanCode.prototype.createTree = function(str){
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
HuffmanCode.prototype.createTableCode = function(tree, reverse, prefix){
	if(tree === undefined || tree === null){
		return;
	}
	reverse = reverse || false;
	var tableCode = {};
	if(tree.left  && tree.right ){
		mixin(tableCode, this.createTableCode(tree.left,reverse,!!prefix?prefix + '0': '0'));
		mixin(tableCode, this.createTableCode(tree.right,reverse,!!prefix?prefix + '1':'1'));
	}else if(!tree.left && !tree.right){
		if(reverse){
			tableCode[prefix] = tree.data
		}else{
			tableCode[tree.data] = prefix;
		}
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
	tree = this.createTree(str);
	tableCodeObj = this.createTableCode(tree);
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
HuffmanCode.prototype.decode = function(decodeString, huffmanCodeTree){
	var tableCodeMap, idx;
	tableCodeMap = this.createTableCode(huffmanCodeTree, true);
	for(idx=0; idx < decodeString.length; idx++){

	}
	
}