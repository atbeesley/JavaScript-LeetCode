/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    
    let arr = []
    
    for(let sentence of sentences){
        let sentenceLength = sentence.split(" ").length;
        arr.push(sentenceLength)
    }        
    
    let greatestVal = 0;
    
    for(i of arr){
        if(i>greatestVal){
            greatestVal = i;
        } 
    }

    return greatestVal;
    
};