class Solution {
    /**24$0
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // Intuition is to store calc all nums every loop in first pass

        let res = [];
        // Brute force

        let product = 1;
        for (let i = 0; i < nums.length; i++){
            for (let j = 0; j < nums.length; j++){
                if (j === i) continue;
                product *= nums[j];
            }
            res.push(product);
            product = 1;
            console.log(res)
        } 


        return res;
    }
}
