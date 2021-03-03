
function bubbleSort(array) {
    let isSorted = false;
    let last = array.length - 1;
    while (!isSorted) {
        isSorted = true
        for (let i = 0; i < last; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                isSorted = false;
            }
        }
        last--;
    }
    return array;
}

bubbleSort([213,15,61,73,762,12,123,123,12,626,347,3587,32,2352352365,12,5,651,627,2376,8,2]);
 
