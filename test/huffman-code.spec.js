/**
 * Unit test for huffman code
 */

 describe('Huffman code', function(){
	var huffmanCode;
	beforeAll(function(){
		huffmanCode = new HuffmanCode();
	});
	afterAll(function(){
		huffmanCode = null;
	});
	it('get frequency count of each character', function(){
		var charArray = ['A','B','R','A','C','A','D','A','B','R','A'];
		var expected =  [
			{ data: 'C', freq: 1, left: undefined, right: undefined},
			{ data: 'D', freq: 1, left: undefined, right: undefined},
			{ data: 'B', freq: 2, left: undefined, right: undefined},
			{ data: 'R', freq: 2, left: undefined, right: undefined},
			{ data: 'A', freq: 5, left: undefined, right: undefined},
		];
		expect(huffmanCode.getCharacterFrequency(charArray)).toEqual(
			jasmine.objectContaining(Object.assign({},[{ data: 'C', freq: 1, left: undefined, right: undefined}]))
		);
	});
	it('create tree', function(){
		expect(huffmanCode.printTree(
			huffmanCode.createTree('ABRACADABRA'),new Array())
		).toEqual(['ARCDB','A','RCDB','R','CDB' ,'CD', 'C', 'D', 'B']);
	});
	it('create code table for string ABRACADABRA', function(){
		var  huffmanCodeTree = huffmanCode.createTree('ABRACADABRA');
		var tableCode = huffmanCode.createTableCode(huffmanCodeTree);
		expect(tableCode).toEqual(jasmine.objectContaining(Object.assign({},{A: '0', R: '10', B: '111', C: '1100', D: '1101'})))
	});

	it("encode valid string using huffman code", function(){
		expect(huffmanCode.encode('ABRACADABRA')).toEqual('01111001100011010111100');
	});

	it('decode valid string using huffman code', function(){
		var tree = huffmanCode.createTree('ABRACADABRA')
		huffmanCode.decode(1001011,tree);
	});
 });