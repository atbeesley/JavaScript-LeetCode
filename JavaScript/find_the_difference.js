/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let obj = {}
    let array = s.split("")

    array.forEach((element) => {
        if(obj[element]){
            obj[element] ++
        } else {
            obj[element] = 1
        } 
    })
    
    for(var i = 0; i < t.length; i++) {
        if(!obj[t.charAt(i)]){
            return t.charAt(i)
        } else {
            obj[t.charAt(i)]--
        }
        if(obj[t.charAt(i)] < 0){
            return t.charAt(i)
        }
    }
}