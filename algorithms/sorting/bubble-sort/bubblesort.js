function bubbleSort(arr) {

    for (let i = 0, len = arr.length; i < len; i++) {

        for (let j = 0; j < len - 1 - i; j++) {// shift larger values to right side

            if(arr[j] > arr[j+1])// if next value is greater than current, swap
                swap(arr, j, j+ 1);

        }// end inner for
        
    }// end outer for

}

function swap(arr, idx1 , idx2){

    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    
}