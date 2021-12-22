/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(
        !s.includes("(") && !s.includes(")") || 
        !s.includes("[") && !s.includes("]") ||
        !s.includes("{") && !s.includes("}")
    ){
        return true;
    } else if(s.includes("(") && s.includes(")")){
        return true;
    } else if(s.includes("[") && s.includes("]")){
        return true;
    } else if(s.includes("{") && s.includes("}")){
        return true;
    } else {
        return false;
    }
};