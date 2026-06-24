class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // Time Complexity: O(n)
        // Space Complexity: O(n)


        // Early exit for empty array
        if (nums.length === 0) return 0;

        let set = new Set(nums);
        let maxSeq = 1;

        // Loop through array to count the sequence of every number n that doesn't have an (n-1) in the set.
        // This ensures we are starting at the beginning of a sequence every time. Then we follow each sequence through
        // And store the current sequence length into max sequence if it is larger than the existing max sequence length.
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
