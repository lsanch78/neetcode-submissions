class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        let set = new Set(nums);
        let maxSeq = 1;
        for (let n of nums) {
            if (!set.has(n - 1)) {
                let sequence = 1;
                let val = n;
                while (set.has(val + 1)) {
                    sequence++;
                    val++;
                }
                if (maxSeq < sequence) maxSeq = sequence;
            }
        }
    return maxSeq;
    }


    
}
