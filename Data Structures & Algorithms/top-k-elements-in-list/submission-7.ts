class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // Declarations, O(n) Space Complexity
        let map = new Map();
        let bucket = Array.from({ length: nums.length + 1 }, () => []);
        let ans: number[] = [];

        // Use a hashmap to store numbers by { value : frequency }
        for (let n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }

        console.log(map);
        // Store them in a bucket array where index = frequency, elem = value
        for (let key of map.keys()) {
            bucket[map.get(key)].push(key);
        }

        console.log(bucket);
        // Iterate backwards through bucket array, building ans k times
        for (let i = nums.length; i > 0; i--){
            for (let j = 0; j < bucket[i].length; j++){
                ans.push(bucket[i][j])
                k--;
                if (k === 0) return ans;
            }
        }
    }
}
