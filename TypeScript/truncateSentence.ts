function truncateSentence(s: string, k: number): string {
    
    const split = s.split(" ")
    
    let arr = []
    
    for(let i = 0; i < k; i++){
        arr.push(split[i])
    }
    
    return arr.join(" ")

};