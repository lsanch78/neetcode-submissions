class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        let l = 0;
        let r = numbers.length - 1;


        while (l < r) {
            let currentSum = numbers[l] + numbers[r];

            if (currentSum < target) {
                l++;
            } else if (currentSum > target) {
                r--;
            } else {
                return [l + 1, r + 1]
            }
        }
        return [];
    }
}
