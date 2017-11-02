describe('test cases for merge sort', () => {

    it('should sort given array of positive values', () => {

        let arr =  [];  // [ 58, 58, 35, 52, 22, 34 ];

        
        for (let i = 0; i < 6; i++) {
            let temp = Math.floor(Math.random() * 100);
            arr.push(temp);
        }

        mergeSort(arr);

        let min = Math.min(...arr);
        let max = Math.max(...arr);

        expect(arr[0]).toBe(min);
        expect(arr[arr.length - 1]).toBe(max);

    });

});