describe('binary search test', () => {

    let arr = [10, 15, 2, 36, 19, 6, 41, 9];

    it('should return index of matching element', () => {

        let idx = binarySearch(arr, 36);

        expect(idx).toBe(3);

    });

    it('should return -1 for non-matching element', () => {

        let idx = binarySearch(arr, 26);

        expect(idx).toBe(-1);

    });

});