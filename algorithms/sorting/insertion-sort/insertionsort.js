function insertionSort(arr) {

    for (let i = 1, len = arr.length; i < len; i++) {

        for (let j = i + 1; j > 0; j--) {

            if (arr[j] < arr[j - 1]) {// compare with partially sorted part and put value in correct place
                swap(arr, j, j - 1);
            } else {// if value greater than last element of partially sorted part, break out of loop
                break;
            }

        }// end inner for

    }// end outer for

}

function swap(arr, idx1, idx2) {

    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

}