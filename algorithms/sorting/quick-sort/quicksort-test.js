describe('test cases for selection sort', () => {

    it('should sort given array of  values', () => {
        let arr = [];

        for (let i = 0; i < 10; i++) {
            let temp = Math.floor(Math.random() * 100);
            arr.push(temp);
        }
   
        quicksort(arr, 0, arr.length - 1);

        let min = Math.min(...arr);
        let max = Math.max(...arr);

        expect(arr[0]).toBe(min);
        expect(arr[arr.length - 1]).toBe(max);

    });

});