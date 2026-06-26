class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0) return 0;
        // first step is to create a Set where nums are all unique
        let set = new Set(nums);
        
        let maxCount = 1;

        for (let i = 0; i < nums.length; i++) {
            let j = i;
            let currentCount = 1;
            
            while (!set.has(nums[j] - 1) && j < nums.length){
                j++;
            }

            let seqStart = nums[j];


            while (set.has(seqStart)) {
                currentCount++;
                seqStart++;
            }
            
            if (maxCount < currentCount) maxCount = currentCount;
        }

        return maxCount;
    }
}
