function selectionSort(arr) {

    for (let i = 0, len = arr.length; i < len; i++) {

        let min = i;

        for (let j = i; j < len; j++) {// find the index of the smallest value

            if (arr[j] < arr[min])
                min = j;

        }// end inner for

        swap(arr, i, min); // push minimum index value to the left
    }// end outer for

}

function swap(arr, idx1, idx2) {

    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

}