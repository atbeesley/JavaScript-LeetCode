/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = []
    let arr = s.split(" ")
    for(let i = 0; i < arr.length; i++){
        res.push(arr[i].split("").reverse().join(""))
    }
    return res.join(" ")
};