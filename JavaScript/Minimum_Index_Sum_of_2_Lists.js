/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */x
var findRestaurant = function(list1, list2) {
    
    let result=[];
    
    for(let i of list1){
        for(let j of list2){
            if(i === j){
                result.push(i)
            }
        }
    }
    
    return result;
    
};