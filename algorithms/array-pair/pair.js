function pairSum(arr, val) {

    let output = [];

    for (let i = 0, end = arr.length - 1; i < end; i++) {

        let current = arr[i];
        let target = val - current; // the value needed to make the pair
        let next = arr[i+ 1];

        if (next === target) {// if next is target, pair found
            output.push([current, next]);
        }

    }

    return output;
}

console.log(pairSum([1,3,2,2],4));
console.log(pairSum([1,2,3,1],3));
console.log(pairSum([1,9,2,8,3,7,4,6,5,5,13,14,11,13,-1],10));