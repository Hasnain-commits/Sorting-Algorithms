function insertionSort(arr) { 
  for (let i = 1; i < arr.length; i++) { 
    let curr = arr[i]; 
    let j = i-1; 
    while (arr[j] > curr && j >= 0) { 
      arr[j+1] = arr[j]; 
      j--; 
    } 
     
    arr[j+1] = curr; 
  } 
  return arr; 
} 
insertionSort([51,123,151,2,6,325,263,12,639])
