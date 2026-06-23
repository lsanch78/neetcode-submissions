class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        //[1,2,4,6]
        //[1,1,2,8] <- Prefix
        //[48,24,6,1] <- Suffix
        //[48,24,12,8] <- Result

        // Time Complexity: O(n), Space Complexity: O(n)
        let n = nums.length;
        let prefix = Array(n).fill(1);
        let res = Array(n).fill(1);
        // Build prefix array
        for (let i = 1; i < n; i++) {
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }

        let suffix = 1;
        for (let j = n - 1; j >= 0; j--) {
            res[j] = prefix[j] * suffix;
            suffix *= nums[j]
        }

        return res;
    }
}
