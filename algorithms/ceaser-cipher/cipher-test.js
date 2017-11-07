describe('cipher test', () => {

    it('should return forwarded cipher text', () => {

        let result = cipher('zak', 2);

        expect(result).toBe('bcm');
    });

    it('should return backtracked cipher text', () => {

        let result = cipher('zak', -2);

        expect(result).toBe('xyi');
    });

    it('should return forwarded cipher text', () => {

        let result = cipher('z a+k', 2);

        expect(result).toBe('b c+m');
    });


});