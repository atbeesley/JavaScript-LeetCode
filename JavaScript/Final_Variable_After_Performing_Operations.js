/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
        
    let x = 0
    for(let i of operations){
           if(i === "++X" || i === "X++"){
               x += 1
           } else if(i === "--X" || i === "X--"){
               x -= 1
           }
        }
    return x
    
};