/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    
    const split = title.split(" ")
    let t = []
    
    for(let i of split){
        if(i.length == 1 || i.length == 2){
            t.push(i.toLowerCase())
           } else {  
             i = i.toLowerCase()
             i = i.charAt(0).toUpperCase() + i.slice(1)
             t.push(i)
           }
    }
    
    return t.join(" ").toString()
    
};