var maximumCount = function(nums) {

    let pos = [];
    let neg = [];

    for(let i of nums){
        if(i>0){
            pos.push(i);
        }else if(i<0){
            neg.push(i);
        }
    }

    const masterArray = [[...pos], [...neg]];
    const lengths = masterArray.map(a=>a.length);
    return Math.max(...lengths);
};