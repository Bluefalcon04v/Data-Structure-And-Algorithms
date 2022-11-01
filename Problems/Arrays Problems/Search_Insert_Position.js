// Problem Statement - Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2


// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1


// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4




var searchInsert = function(nums, target) {
    let leftIndex = 0
    let rightIndex = nums.length-1
    
    while(leftIndex <= rightIndex){
        let mid = Math.floor((leftIndex+rightIndex)/2)
        
        if(nums[mid] === target){
            return mid
        }
        if(nums[mid] > target){
            rightIndex = mid - 1
        }
        else{
            leftIndex = mid + 1
        }
    }
    if(target < nums[0]){
        return 0
    }
    if(target > nums[rightIndex]){
        return nums.length
    }
    
};