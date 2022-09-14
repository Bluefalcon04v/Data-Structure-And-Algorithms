// Problem Statement- Given an array of 'n' elements and a target element 't', find the index of 't' in the array Return -1 if the target element is not found. 

function linearSearch(arr ,target){
    for(let i = 0; i < arr.length;i++){
        if( arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([-2, 3, 10, 7, 13], 10));
console.log(linearSearch([-2, 3, 10, 7, 13], 1));
console.log(linearSearch([-2, 3, 10, 7, 13], 13));
console.log(linearSearch([-2, 3, 10, 13, 13], 13)); // it will return the first occurence of target


//  Big-O time complexity is O(n) ie linear 