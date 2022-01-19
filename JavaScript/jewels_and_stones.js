/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    
    const stonesArr = stones.split("")
    const jewelArr = jewels.split("")
    
    let jewelsInTheStones = []
    
    for (let i of jewelArr){
            for(let j of stonesArr){
                if(i === j){
                    jewelsInTheStones.push(i)
                }
            }
        }
    
    return jewelsInTheStones.length
    
};