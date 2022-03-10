/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const count = {};

    for (const num of nums) {
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    }
        
    for(let i in count){
        if(count[i] > 1){
            return true
        } 
    }
    
    return false
};