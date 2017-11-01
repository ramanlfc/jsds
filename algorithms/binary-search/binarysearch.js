function binarySearch(arr, key) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = parseInt((start + end) / 2);// create a midpoint

        if (arr[mid] === key) {// key found
            return mid;
        }else if (key > arr[mid]) {// key posssibly in upper segment
            start = mid + 1;
        } else {//key possibly in lower segment
            end = mid - 1;
        }

    }// end while

    return -1;
}