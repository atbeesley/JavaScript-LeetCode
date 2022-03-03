/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    let final = "";
    
    for(let i of address){
        if(i === "."){
            final += "[.]"
        } else {
            final += i
        }
    }
    
    return final;
};