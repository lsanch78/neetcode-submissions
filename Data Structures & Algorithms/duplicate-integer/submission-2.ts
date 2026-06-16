class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // Naive approach loop through the array, and comparing each elem to every other elem
        // if matched: return true, else return false Time complexity O(n^2), Space Complexity O(1)

        // Optimized approach, makes use of Sets, Space O(n), Time Complexity: O(n)
        const numsSet = new Set(nums);
        return numsSet.size < nums.length;
    }
}
