function removeElement(nums: number[], val: number): void {
    for(let i = nums.length - 1; i >= 0; i--){
        if(nums[i] === val){
            nums.splice(i, 1);
        }
    }
};