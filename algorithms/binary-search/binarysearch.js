function binarySearch(arr, key) {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {

        let mid = parseInt((start + end) / 2);// create a midpoint

        if (arr[mid] === key) {// key found
            return mid;
        } else if (key > arr[mid]) {// key posssibly in upper segment
            start = mid + 1;
        } else {//key possibly in lower segment
            end = mid - 1;
        }

    }// end while

    return -1;
}

function binarySearchRecursive(arr, key, start, end) {

    if (start > end)// key not found
        return -1;

    let mid = parseInt((start + end) / 2);

    if (arr[mid] === key)
        return mid;
    else if (arr[mid] < key)
        start = mid + 1;
    else
        end = mid - 1;

    return binarySearchRecursive(arr, key, start, end);
}