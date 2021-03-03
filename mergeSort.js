function mergeSort(arr, arr2) {
    let i = 0;
    let j = 0;
    let newArr = [];
    while (i < arr.length && j < arr2.length)  {
        if (arr[i] < arr2[j]) {
            newArr.push(arr[i]);
            i++;
        } else {
            newArr.push(arr2[j]);
            j++;
       }
    }
    while (i < arr.length) {
        newArr.push[arr[i]];
        i++;
    }
    while (j < arr2.length) {
        newArr.push[arr2[j]];
        j++;
    }
    
    return newArr;
}

function mergeSort(arr) { //
    if (arr.length <= 1) return arr; 
    let mid = Math.floor(arr.length / 2); 
    let left = mergeSort(arr.slice(0, mid)); 
    let right = mergeSort(arr.slice(mid)); 
    return mergeArrays(left, right); 
}
