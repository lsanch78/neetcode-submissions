class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        // HashMap, Brute Force, Binary Search methods are all less efficient than two pointer
        // Time Complexity: O(n), Space Complexity O(1);
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            const curSum = numbers[l] + numbers[r];

            if (curSum > target) {
                r--;
            } else if (curSum < target) {
                l++;
            } else {
                return [l + 1, r + 1];
            }
        }
        return [];
    }
}
