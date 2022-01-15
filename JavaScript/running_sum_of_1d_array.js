var runningSum = function(nums) {
    const cumulativeSum = (sum => value => sum += value)(0);

    return nums.map(cumulativeSum);
};
