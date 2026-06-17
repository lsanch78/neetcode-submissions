class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // Naive approach is to loop through rest of elems for each indice
        // Time complexity: O(n^2) Quadratic, Space Complexity: O(1)

        // Optimized approach we store each val in a HashMap where we check
        // if the current number (indice) is the complementary of the target value (target - val)
        // if true return both indices
        // else store it in HashMap as { complementary : indice }
        // Time complexity: O(n) Linear, Space Complexity: O(n) because of HashMap

        
        const complMap = new Map<number,number>();
        const ans = [0, 0];

        for (let i = 0; i < nums.length; i++) {
            if (complMap.has(nums[i])) {
                // Answer is found, build out array
                ans[0] = i;
                ans[1] = complMap.get(nums[i]);
                return ans;
            } else {
                let complementary = target - nums[i];
                complMap.set(complementary, i);
            }
        }
        return ans;
    }
}
