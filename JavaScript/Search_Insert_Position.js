/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    for(i=0; i<nums.length && nums[i] < target;i++);
        return i    
    
};