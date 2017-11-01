describe('shell sort tests', () => {

    it('should sort given array with positive values', () => {

        let arr = [];

        for (let i = 0; i < 10; i++) {
            let temp = Math.floor(Math.random() * 100);
            arr.push(temp);
        }

        console.log(arr);
        shellSort(arr);
        console.log(arr);

        let min = Math.min(...arr);
        let max = Math.max(...arr);

        expect(arr[0]).toBe(min);
        expect(arr[arr.length - 1]).toBe(max);

    });

});