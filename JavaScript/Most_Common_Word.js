/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
        
    let para = paragraph.replace(/[\p{P}$+<=>^`|~]/gu, " ");
    
    para = para.toLowerCase().split(/[, ]/g);
        
    let freqMap = {};
    let mostfreq = "";
    
    for(let word of para){
        if(!banned.includes(word) && word !== ""){
            if (!freqMap[word]) {
                freqMap[word] = 0;
            }
                freqMap[word] += 1;
        }
    }
    
    let max = 0;
    let maxKey = "";
    
    for(let key in freqMap){
        if(freqMap[key] > max){
            max = freqMap[key];
            maxKey = key;
        }
    }
    return maxKey;
};