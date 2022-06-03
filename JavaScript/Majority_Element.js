/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {  
    const counts = {};
    for (const num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
        console.log(counts)
    }
    let max = 0;
    let maxKey = "";
    for(let i in counts){
        if(counts[i] > max){
            max = counts[i];
            maxKey = i
        }
    }
    return maxKey
};