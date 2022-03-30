function moveZeroes(nums: number[]): void {
    for(let num of nums){
        if(num==0){
            const index = nums.indexOf(num);
            nums.splice(index,1);
            nums.push(0);
        } 
    }     
};