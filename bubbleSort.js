
function bubbleSort(data) {
for (let i = data.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        if (data[j] > data[j + 1]) {
            let temp = data[j];
            data[j] =  data[j + 1];
            data[j + 1] = temp;
        }
        console.log(data);
    }

}
}

bubbleSort([213,15,61,73,762,12,123,123,12,626,347,3587,32,2352352365,12,5,651,627,2376,8,2]);
 