function reverseWords(s: string): string {
    let res = []
    let arr = s.split(" ")
    for(let i = 0; i < arr.length; i++){
        res.push(arr[i].split("").reverse().join(""))
    }
    return res.join(" ")
};