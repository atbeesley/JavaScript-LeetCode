var maximumCount = function(nums) {

    let pos = 0;
    let neg = 0;

    for(let i of nums){
        if(i>0){
            pos += 1;
        }else if(i<0){
            neg += 1;
        }
    }

    return Math.max(pos, neg);
};