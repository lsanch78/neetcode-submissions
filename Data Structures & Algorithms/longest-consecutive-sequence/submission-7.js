class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let set = new Set(nums);
        let n = nums.length;

        let maxCount = 1;
        console.log(set);

        for (let i = 0; i < n; i++) {
            let val = nums[i];
            let count = 1;

            let j = i;

            if (!set.has(val - 1)) {
                while (set.has(val + 1)) {
                    count++;
                    val++;
                }
            }

            if (maxCount < count) maxCount = count;
        }

        return maxCount;
    }
}
