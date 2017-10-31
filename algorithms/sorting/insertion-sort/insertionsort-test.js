describe('test cases for insertion sort', () => {

    it('should sort given array of positive values', () => {
        let arr = [];

        for (let i = 0; i < 10; i++) {
            let temp = Math.floor(Math.random() * 100);
            arr.push(temp);
        }

        insertionSort(arr);

        let min = Math.min(...arr);
        let max = Math.max(...arr);

        expect(arr[0]).toBe(min);
        expect(arr[arr.length - 1]).toBe(max);

    });

    it('should sort given array of negative values', () => {

        let arr = [];

        for (let i = 0; i < 10; i++) {
            let temp = Math.floor(Math.random() * 100);
            arr.push(-temp);
        }

        insertionSort(arr);

        let min = Math.min(...arr);
        let max = Math.max(...arr);

        expect(arr[0]).toBe(min);
        expect(arr[arr.length - 1]).toBe(max);

    });


});