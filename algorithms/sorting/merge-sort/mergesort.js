function mergeSort(arr) {

    if (arr.length === 1)
        return;

    let mid = parseInt(arr.length / 2);

    // partition the original array
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    mergeSort(left);
    mergeSort(right);

    merge(arr, left, right);

}

function merge(arr, left, right) {

    let arrLen = arr.length, leftLen = left.length, rightLen = right.length;
    let i = j = k = 0;

    while (j < leftLen && k < rightLen) {// compare the values in given sub arrays, place them in order in the original array

        if(left[j] === right[k]){// if elements at certain index are same, append either from either sub array
            arr[i] = left[j];
            j++;
            i++;
        }

        if (left[j] < right[k]) {
            arr[i] = left[j];
            i++;
            j++;
        }

        if (right[k] < left[j]) {
            arr[i] = right[k];
            i++;
            k++;
        }

    }// end while

    while (j < leftLen) {// append all remaining elements to original array
        arr[i] = left[j];
        i++;
        j++;
    }

    while (k < rightLen) {// append all remaining elements to original array
        arr[i] = right[k];
        i++;
        k++;
    }

}