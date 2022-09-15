// Problem Statement- Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array Return -1 if the target element is not found. 

function binarySearch(arr ,target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleCount = Math.floor((leftIndex + rightIndex)/2)
        if(arr[middleCount] === target){
            return middleCount
        }
        if(arr[middleCount] > target){
            rightIndex = middleCount - 1
        } else{
            leftIndex = middleCount + 1
        }
    } 
    return -1
}

console.log(binarySearch([-2, 3, 10, 11, 13], 11));
console.log(binarySearch([-2, 3, 7, 10, 13], 13));
console.log(binarySearch([-2, 3, 7, 10, 13], 1));


//  Big-O time complexity is O(log n) ie logarthmic cause input is reducing by half on each iteration