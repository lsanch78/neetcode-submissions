class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b);
        let res: number[][] = [];

        for (let i = 0; i < nums.length - 2; i++) {
            if (i < nums.length - 2 && nums[i] === nums[i - 1]) continue;
            if (nums[i] > 0) break;

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
                    l++;
                    r--;
                }
            }
        }
        return res;
    }
}
