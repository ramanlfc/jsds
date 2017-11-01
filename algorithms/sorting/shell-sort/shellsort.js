function shellSort(arr) {

    let increment = parseInt(arr.length / 2);

    while (increment > 0) {

        for (let i = 0; i < increment; i++) {// sort all sublists
            insertionSort(arr, i, increment);
        }

        increment = parseInt(increment / 2);
    }

}


function insertionSort(arr, start, increment) {

    for (let i = start + increment, len = arr.length; i < len; i += increment) {

        for (let j = i; j > 0 ; j -= increment) {

            if (arr[j] < arr[j - increment])// compare values at increments 
                swap(arr, j, j - increment);// swap if, out of order
            else
                break;

        }// end inner for

    }// end outer for

}

function swap(arr, idx1, idx2) {

    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

}