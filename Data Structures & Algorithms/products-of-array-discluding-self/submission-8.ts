class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        //[1,2,3,4] <- Input
        //[1,1,2,6] <- Prefix
        //[24,12,4,1] <- Suffix
        //[24,12,8,6] <- Solution

        // Loop through nums twice, building prefix suffix, multiplying results into results array.
        let prefix = Array(nums.length).fill(1);
        let suffix = Array(nums.length).fill(1);
        let res = Array(nums.length);

        for (let i = 1; i < nums.length; i++) {
            prefix[i]  = nums[i - 1] * prefix[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i]  = nums[i + 1] * suffix[i + 1];
        }

        for (let i = 0; i < res.length; i++) {
            res[i] = suffix[i] * prefix[i];
        }
        return res;
    }
}
