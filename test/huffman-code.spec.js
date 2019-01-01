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
	it('should count frequency of each character of given valid string', function(){
		var charArray = ['A','B','R','A','C','A','D','A','B','R','A'];
		expect(huffmanCode.getCharacterFrequency(charArray)).toEqual(
			jasmine.objectContaining(Object.assign({},[{ data: 'C', freq: 1, left: undefined, right: undefined}]))
		);
	});
	it('should test to create tree when string is valid', function(){
		expect(huffmanCode.printTree(
			huffmanCode.createEncodeTree('ABRACADABRA'),new Array())
		).toEqual(['ARCDB','A','RCDB','R','CDB' ,'CD', 'C', 'D', 'B']);
	});
	
	it('should test table code when string is valid(ABRACADABRA)', function(){
		var  huffmanCodeTree = huffmanCode.createEncodeTree('ABRACADABRA');
		var tableCode = huffmanCode.createEncodeTableCode(huffmanCodeTree);
		expect(tableCode).toEqual(jasmine.objectContaining(Object.assign({},{A: '0', R: '10', B: '111', C: '1100', D: '1101'})))
	});

	it("should test encode string when string is undefined", function(){
		expect(huffmanCode.encode(undefined)).toBeUndefined();
	});
	it("should test encode string when string is null", function(){
		expect(huffmanCode.encode(null)).toBeNull();
	});
	it("should test encode string when string is valid", function(){
		expect(huffmanCode.encode('ABRACADABRA')).toEqual('01111001100011010111100');
	});

	it('should test decode string when string is undefined', function(){
		var  huffmanCodeTree = huffmanCode.createEncodeTree('ABACA');
		expect(huffmanCode.decode(undefined,huffmanCodeTree)).toBeUndefined();
	});

	it('should test decode string when string is null', function(){
		var  huffmanCodeTree = huffmanCode.createEncodeTree('ABACA');
		expect(huffmanCode.decode(null,huffmanCodeTree)).toBeNull();
	});

	it('should test decode string when tree is null', function(){
		expect(huffmanCode.decode("1001011",null)).toEqual('');
	});


	it('should test decode string when string contains others character expect 0 & 1\'s', function(){
		var  huffmanCodeTree = huffmanCode.createEncodeTree('ABACA');
		expect(function(){ huffmanCode.decode('1021011',huffmanCodeTree)}).toThrow(new Error("Invalid decoded string"));
	});

	it('should test decode string when string is valid', function(){
		var  huffmanCodeTree = huffmanCode.createEncodeTree('ABACA');
		expect(huffmanCode.decode('1001011',huffmanCodeTree)).toEqual('ABACA');
	});

 });