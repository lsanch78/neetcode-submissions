class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // Turn nums array into a set. Then iterate through it, find numbers where n - 1 does not exist as a starting point
        // Keep a seperate currentCount and maxCount. Early exit on nums.length == 0.

        if (nums.length === 0) return 0;

        let maxCount = 1;
        let numsSet = new Set(nums);

        for (let i = 0; i < nums.length; i++) {
            let j = i;
            let currentCount = 1;

            // find a candidate starting sequence
            if (numsSet.has(nums[j] - 1)) continue;

            let sequence = nums[j];
            while (numsSet.has(sequence + 1)) {
                currentCount++;
                sequence++;
            }

            if (maxCount < currentCount) {
                maxCount = currentCount;
            }
        }

        return maxCount;
    }
}
