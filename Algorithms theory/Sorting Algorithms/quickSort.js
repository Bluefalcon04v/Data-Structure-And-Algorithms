//  Problem Statement- Given an array of integers, Sort the arrays

function quickSort(arr){
    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for(let i = 0; i<arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [-3, 4, 2, 10, 7, 8 ]
console.log(quickSort(arr));


// Worse case time complexity - O(n^2) 
// Average case time complexity - O(nlog n)