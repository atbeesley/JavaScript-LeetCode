/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    
    const split = s.split(" ")
    let arr = []
    for(i=1; i<=split.length; i++){
        arr.push("#")
    }
        
    for(let i of split){
        const index = i.slice(-1)
        const word = i.slice(0, -1)
        arr.splice(index,1,word)
    }
    
    arr.shift()
        
    return arr.join(" ")
    
};