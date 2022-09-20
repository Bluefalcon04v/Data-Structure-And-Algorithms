//Problem Statement- Given an array  of integers, Sort the array 

function bubbleSort(arr){
    do{
        swapped = false   
        for(let i=0; i< arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    }while(swapped)
}

const arr = [-1, 20, 3, 7, 5]
bubbleSort(arr)
console.log(arr);

//  Big-O Time Complexity is O(n^2) ie Quadratic time complexity, because it contains a nested loop