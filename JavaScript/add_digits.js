/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
    
    // stringify the int
    num = num.toString()
    
    // split its ints into array 
    let split = num.split("")
    
    console.log(split)
    
    // for(let i of split){
    //     const initialValue = 0;
    //     let sumWithInitial = split.reduce(
    //         (previousValue, currentValue) => previousValue + currentValue,
    //         initialValue
    //     );
        
        for(let i of split){
        const initialValue = 0;
        let sumWithInitial = split.reduce(
            (previousValue, currentValue) => previousValue + currentValue
        );
    
    if(sumWithInitial.length > 1){
        addDigits(sumWithInitial)
    }
    
    return sumWithInitial
    
};