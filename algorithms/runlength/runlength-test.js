describe('run length encoding/decoding test', () => {

    it('should run length encode a string', () => {

        let str = 'aabcccccdddd';

        let result = encode(str);

        expect(result.length).toBe(8);
        expect(result).toBe('2a1b5c4d');
    });


    it('should run length decode a string', () => {

        let str = '2a1b4e15d';

        let result = decode(str);

        expect(result.length).toBe(22);
        expect(result).toBe('aabeeeeddddddddddddddd');
    });

});