/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let num of nums){
        if(num===0){
            const index = nums.indexOf(num);
            nums.splice(index,1);
            nums.push(0);
        } 
    }    
};