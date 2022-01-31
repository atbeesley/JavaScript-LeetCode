/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    
    let arr = []
    
    const nums = [...nums1, ...nums2, ...nums3]
    
    
    for(let num of nums){
        if(
            nums1.includes(num) && nums2.includes(num) && nums3.includes(num) && !arr.includes(num) ||
            nums1.includes(num) && nums2.includes(num) && !nums3.includes(num) && !arr.includes(num) ||
            nums1.includes(num) && !nums2.includes(num) && nums3.includes(num) && !arr.includes(num) ||
            !nums1.includes(num) && nums2.includes(num) && nums3.includes(num) && !arr.includes(num)
        ){
            arr.push(num)
        }
    }
    
    return arr
};