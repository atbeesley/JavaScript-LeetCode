/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
    const index = word.indexOf(ch)
    let prefix = word.slice(0, index+1)
    const revPrefix = prefix.split("").reverse().join("")
    const end = word.substring(index+1)
    
    return revPrefix+end
    
};