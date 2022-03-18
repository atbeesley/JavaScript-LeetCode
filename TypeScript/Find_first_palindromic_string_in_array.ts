function firstPalindrome(words: string[]): string {
    for(let i of words){
        let rev = i.split("").reverse().join("")
        if(i === rev){
            return i
        }
    }
    return ""
};