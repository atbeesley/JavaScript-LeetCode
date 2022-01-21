/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    
    let x = 0
    let y = 0
    
    for(let i of moves){
        if(i === "R"){
            x += 1
        } else if (i ==="L"){
            x -= 1
        } else if (i === "U"){
            y += 1
        } else if (i === "D"){
            y -= 1 
        }
    }
    
    return (x === 0 && y == 0)
    
};