// Problem Statement- Given an array of integers, Sort the array 


function insertionSort(arr){
    for(i=1; i<arr.length; i++){
        let numberToInsert = arr[i]
        let j = i - 1
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = numberToInsert
    }
}

const arr = [-6, 9, 7, 1, 3]
insertionSort(arr)
console.log(arr);

// Big-O Time Complexity is O(n^2) ie Quadratic, because of nested loop