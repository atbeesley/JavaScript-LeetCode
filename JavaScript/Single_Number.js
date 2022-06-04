/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const counts = {};
    for (const num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    } 
     return Object.keys(counts).find(key => counts[key] === 1);
};