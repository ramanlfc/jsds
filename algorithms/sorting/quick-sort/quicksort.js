function quicksort(arr, start, end) {   // [ 4, 2, 6, 3, 9, 7 ]

    if (start < end) {

        let pIndex = partition(arr, 0, end);

        quicksort(arr, 0, pIndex - 1);
        quicksort(arr, pIndex + 1, end);

    }

}

function partition(arr, start, end) {   // [ 2, 3, 4, 6, 7, 9 ]

    let pIndex = start;
    let pivot = arr[end];

    for (let i = start; i < end; i++) {

        if (arr[i] <= pivot) {
            swap(arr, pIndex, i);
            pIndex++;
        }

    }// end for

    swap(arr, pIndex, end);

    return pIndex;
}

function swap(arr, idx1, idx2) {

    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

}