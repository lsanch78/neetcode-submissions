class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        // Turn nums array into a set. Then iterate through it, find numbers where n - 1 does not exist as a starting point
        // Keep a seperate currentCount and maxCount. Early exit on nums.length == 0.

        if (nums.length === 0) return 0;

        let maxCount = 1;
        let numsSet = new Set(nums);
        console.log(numsSet);

        //[2,20,4,10,3,5]

        for (let i = 0; i < nums.length; i++) {
            let j = i;
            let currentCount = 1;

            // find a candidate starting number
            if (numsSet.has(nums[j] - 1)) continue;

            console.log("candidate number to start counting : " + nums[j]);


            let start = nums[j];
            while (numsSet.has(start + 1)) { 
                currentCount++;
                start++;
                console.log("number we need to find to advance count: " + start);    
                console.log(numsSet.has(start))
            }
            
            if (maxCount < currentCount) {
                maxCount = currentCount;
            }
            console.log(maxCount + "," + currentCount);
        }

        return maxCount;
    }
}
