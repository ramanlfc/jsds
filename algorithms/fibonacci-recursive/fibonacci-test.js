describe('recursive fibonacci test case', () => {

    it('should return value at position X of fibonacci series', () => {

        let result = fibonacci(5);

        expect(result).toBe(8);
    });

    it('should return 1 for positions 0 or 1 of fibonacci series', () => {

        let result1 = fibonacci(0);
        let result2 = fibonacci(1);

        expect(result1).toBe(1);        
        expect(result2).toBe(1);
    });

});