var numDifferentIntegers = function(word) {

    if(!/\d/.test(word)) return 0;

    const spaced = word.replace(/\D/g,' ');
    let arr = [];
    const trimmed = spaced.trim().split(/\s+/);

    for(let num of trimmed){
        arr.push(BigInt(num));
    }

    const unique = [...new Set(arr)];

    return unique.length;
    
};