class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Brute force method: Loop through each elem, compare every other elem and check.
        // Time Complexity: O(n^2), Space Complexity: O(1)

        // HashMap method: create a map of { complimentary : index } if we come across complimentary in
        // single loop, we return current index + complimentary index. complimentary = target - current val;
        // Time Complexity: O(n), Space Complexity: O(n)

        let map = new Map();
        let ans = [];

        for (let i = 0; i < nums.length; i++) {
            let currentVal = nums[i];
            let compl = target - currentVal;

            if (map.has(currentVal)) {
                // We've found the answer, just assign to array
                ans.push(i);
                ans.push(map.get(currentVal));
                return ans;
            } else {
                // Iterating case: we have to build a map of: { compl : index }
                map.set(compl, i);
            }
        }
    }
}
