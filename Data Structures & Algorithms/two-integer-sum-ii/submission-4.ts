class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let r = numbers.length - 1;
        let l = 0;

        while (l < r) {
            let val = numbers[l] + numbers[r];

            if (val > target) {
                r--;
            } else if (val < target) {
                l++;
            } else {
                return [l + 1, r + 1];
            }
        }
        return [0,0];
    }
}
