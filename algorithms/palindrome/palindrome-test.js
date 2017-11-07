describe('palindrome test', () => {

    it('should return true for  palindrome', () => {

        let result = palindrome('rAce caR');

        expect(result).toBe(true);
    });

    it('should return false for non palindrome', () => {

        let result = palindrome('adam');

        expect(result).toBe(false);
    });

});