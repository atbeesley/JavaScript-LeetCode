var isPrefixOfWord = function(sentence, searchWord) {
    sentence = sentence.split(" ");
    for(let i of sentence){
        if(i.startsWith(searchWord)){
            let indexOfPrefix = sentence.indexOf(i);
            indexOfPrefix += 1;
            return indexOfPrefix;
        } 
    }
    return -1;
};