var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(" ");
    for(let i of sentence){
        if(i.startsWith(searchWord) === true){
            let thisIsSilly = sentence.indexOf(i);
            thisIsSilly = thisIsSilly + 1;
            return thisIsSilly;
        } 
    }
    return -1;
};