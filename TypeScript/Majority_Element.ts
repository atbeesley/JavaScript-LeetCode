function majorityElement(nums: number[]): number {
    const counts = {};
    for (const num of nums) {
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    let max = 0;
    let maxKey = "";
    for(let i in counts){
        if(counts[i] > max){
            max = counts[i];
            maxKey = i;
        }
    }
    return maxKey as unknown as number;
};
