class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        // Brute force approach simply through 3 times for i,j,k and then sort them and then put them in a set to dedup O(n^3) + O(nlogn)
        // Optimal approach: Choose an anchor: i, + two pointers: l & r. Have an outerloop for i, and an inner loop while l<r
        // Skipping identical values

        nums.sort((a, b) => a - b);
        let res: number[][] = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (nums[i] > 0) break;
            if (nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                let val = nums[i] + nums[l] + nums[r];

                if (val > 0) {
                    r--;
                } else if (val < 0) {
                    l++;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) l++;
                    while (l < r && nums[r] === nums[r - 1]) r--;
                    r--;
                    l++;
                }
            }
        }
        return res;
    }
}
