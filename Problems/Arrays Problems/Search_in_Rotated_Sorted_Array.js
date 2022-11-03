// Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1



 var search = function(nums, target) {
    let leftIndex = 0
    let rightIndex = nums.length - 1
    let maxIndex = 0
    
    while(leftIndex <= rightIndex){
        // let maxIndex = 0
        let mid = Math.floor((leftIndex + rightIndex)/2)
        if(nums[maxIndex] < nums[mid]){
            maxIndex = mid
            leftIndex = mid + 1
        }
        else{
            rightIndex = mid - 1
        } 
    }
    
    
    leftIndex = 0
    rightIndex = nums.length - 1
    if(target === nums[maxIndex]){
        return maxIndex
    }
    
    if(target > nums[leftIndex]){
        while(leftIndex <= maxIndex){
            let mid = Math.floor((leftIndex + maxIndex)/2)  
            
            if(nums[mid] === target){
                return mid
            }
            if(nums[mid] < target){
                leftIndex = mid + 1
            }else{
                maxIndex = mid - 1
            }
        }
    }else{
        while(maxIndex <= rightIndex){
            let mid = Math.floor((rightIndex + maxIndex)/2)  
            
            if(nums[mid] === target){
                return mid
            }
            if(nums[mid] < target){
                maxIndex = mid + 1
            }else{
                rightIndex = mid - 1
            }
        }
    }
    return -1
};