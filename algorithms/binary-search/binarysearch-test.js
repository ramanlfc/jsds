describe('binary search test', () => {

    let arr = [2, 5, 9, 36, 40, 52, 63, 79];

    it('should return index of matching element', () => {

        let idx = binarySearch(arr, 36);

        expect(idx).toBe(3);

    });

    it('should return -1 for non-matching element', () => {

        let idx = binarySearch(arr, 26);

        expect(idx).toBe(-1);
    });


    it('should return index of matching element recursively', () => {

        let idx = binarySearchRecursive(arr, 36, 0, arr.length - 1);

        expect(idx).toBe(3);
    });

    it('should return -1 for non-matching element recursively', () => {

        let idx = binarySearchRecursive(arr, 25, 0, arr.length - 1);

        expect(idx).toBe(-1);
    });

});