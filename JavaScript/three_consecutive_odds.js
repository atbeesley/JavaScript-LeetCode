/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    
    const isNumberEven = (num) => {
        return num % 2 === 0
    }
    
    for(let i = 0; i < arr.length-2; i++){
        if(arr.length === 1 || arr.length === 2){
            return false
        } else if(
            !isNumberEven(arr[i]) && 
            !isNumberEven(arr[i+1]) && 
            !isNumberEven(arr[i+2])
        ){
            return true
        } 
    }
    
    return false
    
};