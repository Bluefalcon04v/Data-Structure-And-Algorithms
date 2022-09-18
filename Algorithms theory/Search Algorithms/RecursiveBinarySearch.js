// Problem Statement- Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array Return -1 if the target element is not found. solve it with Recursive Binary Search techinque.

function recursiveBinarySearch(arr, target){
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return "Error!!, not found"
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) /2)
    if(target === arr[middleIndex]){
        return  "index are " + middleIndex
    }
    if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex - 1)
    }
    else{
        return search(arr, target, middleIndex + 1, rightIndex) 
    }
}

console.log(recursiveBinarySearch([-3, 2, 5, 8, 10], 5))
console.log(recursiveBinarySearch([-3, 2, 5, 8, 10], 8));
console.log(recursiveBinarySearch([-3, 2, 5, 8, 10], 15));

// Big-O time complexity is O(log n) because the input size is decreasing by half on every iteration