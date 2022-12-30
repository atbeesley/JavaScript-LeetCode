function isPrefixOfWord(sentence: string, searchWord: string): number {
    const sentenceArr = sentence.split(" ");
    for(let i of sentenceArr){
        if(i.startsWith(searchWord)){
            let indexOfPrefix = sentenceArr.indexOf(i);
            indexOfPrefix += 1;
            return indexOfPrefix;
        } 
    }
    return -1;
};