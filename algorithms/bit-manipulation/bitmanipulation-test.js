describe('bit manipulation test cases', () => {

    it('should return true for bit set on X position', () => {

        let result = checkSetBit(5, 2);

        expect(result).toBe(true);
    });

    it('should return false for bit unset on X position', () => {

        let result = checkSetBit(8, 2);

        expect(result).toBe(false);
    });

    it('should set bit at position X', () => {

        let num = 5;

        let result = setBit(num, 1);

        expect(result).toBe(7);
        expect(checkSetBit(result, 1)).toBe(true);
    });

    it('should return all bits of a number', () => {

        let result = getAllBits(15);

        expect(result.length).toBe(32);
    });

    it('should return count of set bits of a number', () => {

        let result = countSetBits(15);

        expect(result).toBe(4);
    });

    it('should reverse bits of a positive number', () => {

        let num = 54;

        let result = reverseBits(num);

        expect(checkSetBit(result, 31)).toBe(false);
    });

    it('should reverse bits of a negative number', () => {

        let num = -54;

        let result = reverseBits(num);

        expect(checkSetBit(result, 0)).toBe(true);
    });

});