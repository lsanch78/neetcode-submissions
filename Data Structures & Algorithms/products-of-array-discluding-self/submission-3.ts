class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // Initial: [1,2,4,6]
        // Prefix:  [1,1,2,8]
        // Suffix:  [48,24,6,1]
        // Solution:[48,24,12,8]

        // Time Complexity: O(n) + O(n) + O(n) = O(n), there is a way to simplify to two loops by combining suffix step with res building.
        // Space Comeplexity: O(n) + O(n) + O(n) = O(n), O(n) + O(n) + O(1) if we were to combine suffix array with res array.
        let n = nums.length;
        let prefix = Array(n).fill(1);
        let suffix = Array(n).fill(1);
        let res = [];

        for (let i = 1; i < n; i++){
            prefix[i] = nums[i - 1] * prefix[i - 1];
        }
        console.log(prefix);

        // Might break when n <= 2
        for (let i = n - 2; i >= 0; i--) {
            suffix[i] = nums[i + 1] * suffix[i + 1];
        }
        console.log(suffix);

        for (let i = 0; i < n; i++) {
            res[i] = prefix[i] * suffix[i];
        }
        console.log(res);

        return res;
    }
}
