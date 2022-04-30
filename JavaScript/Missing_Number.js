/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const sorted = nums.sort((a,b) => (a-b))
        
    for(let i = 0; i <= sorted.length; i++){
        if(sorted[0] !== 0){
            return 0
        }
        if(sorted[i+1]  !== i+1){
            return i+1
        } 
    }
    
};