/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    
    const split = s.split(" ")
    
    let arr = []
    
    for(i = 0; i < k; i++){
        arr.push(split[i])
    }
    
    return arr.join(" ")
    
};