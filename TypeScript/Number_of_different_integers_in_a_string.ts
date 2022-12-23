function numDifferentIntegers(word: string): number {
    if(!/\d/.test(word)) return 0;

    const spaced = word.replace(/\D/g,' ');
    let arr = [];
    const trimmed = spaced.trim().split(/\s+/);

    for(let num of trimmed){
        arr.push(BigInt(num));
    }

    let unique = arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    });

    return unique.length;
};