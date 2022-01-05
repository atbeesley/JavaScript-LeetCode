/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    
    let totalsArr = [];
    let boolArr = [];
    
    for(var candy of candies){
        totalsArr.push(candy + extraCandies);
    }
    
    
    for(let i=0; i<totalsArr.length; i++){
        boolArr.push(totalsArr[i] >= Math.max(...candies));
    }
                
    return boolArr;
    
};