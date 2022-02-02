/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    
    let reversed1 = parseInt(num.toString().split("").reverse().join(""))
        
    let reversed2 = reversed1.toString().split("").reverse().join("")
        
    return num == reversed2
    
};