class Solution {
    int i, j = 0;
    int ans = 0;

    public int[] twoSum(int[] nums, int target) {
        for (i = 0; i < nums.length - 1; i++) {
            for (j = i + 1; j <= nums.length - 1; j++) {
                if (nums[i] + nums[j] == target) {
                    ans = nums[i] + nums[j];
                    break;
                }
            }
            if (ans == target) {
                break;
            }
        }
        return new int[] { i, j };
    }
}