/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let richest = 0;
    
    for(let customer of accounts){
            let val = customer.reduce((a, b) => a + b, 0)
            if(val > richest){
                richest = val;
            }
    }
    
    return richest;
    
};