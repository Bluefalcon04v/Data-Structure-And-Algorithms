// Find First and Last Position of Element in Sorted Array


// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]


 var searchRange = function(nums, target) {
    let leftIndex = 0
    let rightIndex = nums.length - 1
    
    while(leftIndex <= rightIndex){
        let mid = Math.floor((leftIndex + rightIndex)/2)
        
        if(nums[mid] === target){
            let count = mid
            let n = mid
            while(nums[count] === target){
                count++
            }
            while(nums[n] === target){
                n--
            }return [n+1, count-1]
        }
        
        if(nums[mid] > target){
            rightIndex = mid - 1
        }
        else{
            leftIndex = mid + 1
        }
    } 
    return [-1, -1]
};
