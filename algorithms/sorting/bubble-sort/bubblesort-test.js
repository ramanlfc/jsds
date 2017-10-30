describe('test cases for bubble sort', () => {

    it('should sort given array of positive values', () => {

        let arr = [];

        for (let i = 0; i < 10; i++) {
            let temp = Math.floor(Math.random() * 100);
            arr.push(temp);
        }

        bubbleSort(arr);

        let min = Math.min.apply(null, arr);
        let max = Math.max.apply(null, arr);

        expect(arr[0]).toBe(min);
        expect(arr[arr.length - 1]).toBe(max);

    });

    it('should sort given array of negative values', () => {

        let arr = [];

        for (let i = 0; i < 10; i++) {
            let temp = Math.floor(Math.random() * 100);
            arr.push(-temp);
        }

        bubbleSort(arr);

        let min = Math.min.apply(null, arr);
        let max = Math.max.apply(null, arr);

        expect(arr[0]).toBe(min);
        expect(arr[arr.length - 1]).toBe(max);

    });

});