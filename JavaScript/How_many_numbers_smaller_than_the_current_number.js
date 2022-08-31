/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
        
    const sorted = [...nums].sort((a, b) => a - b);
        
    let arr = [];
    
    for(let i in sorted){
        arr.push(sorted.indexOf(nums[i]))
    }
    
    return arr;
};