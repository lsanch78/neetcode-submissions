class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const n = nums.length;
        const res = new Array(n).fill(1);
        console.log(res)

        for (let i = 1; i < n; i++) {
            // build prefix by mult products of left side
            res[i] = res[i - 1] * nums[i - 1];
        }

        // multiply the suffix to prefix in one array res
        let postfix = 1;
        for (let i = n - 1; i >= 0; i--){
            res[i] *= postfix;
            postfix *= nums[i];
        }
        return res;
    }
}
