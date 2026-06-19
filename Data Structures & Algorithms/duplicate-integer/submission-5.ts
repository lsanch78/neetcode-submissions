class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        // Is sets only save unique keys as values and a property of this is it dedupes lists
        // Time Complexity O(n), Space Complexity O(n)
        let set = new Set(nums);
        return (set.size < nums.length);
    }
}
