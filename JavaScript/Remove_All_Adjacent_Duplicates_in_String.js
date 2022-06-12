/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) { 
    s = s.split("")
    for(let i=0; i<s.length-1; i++){
        while(i>=0 && s[i] === s[i+1]){
            s.splice(i,2)
            i--
        }
    }
    return s.join("") 
};