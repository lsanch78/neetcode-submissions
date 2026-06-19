class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // aware of a min-heap solution where we constantly store min on top pop the rest
        

        // HashMap & Bucket Sort Method: Store { val : frequency } in Hashmap, store frequency as index in countArray, iterate backwards k times
        // Time Complexity: O(n), Space complexity: O(n)

        // Declarations:
        let map = new Map();
        let countArray = Array.from({length : nums.length + 1}, () => []);
        let ans = [];


        // build map with { val : frequency } key value pair
        for (let n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }
        console.log(map);

        // build array with frequency as index, elem as val
        for (let k of map.keys()) {
            countArray[map.get(k)].push(k);
            console.log(countArray);
        }


        // iterate backwords writing to ans k times
        for (let i = nums.length; i > 0; i--){
            for (let j = 0; j < countArray[i].length; j++){
                ans.push(countArray[i][j]);
                k--;
                if (k === 0) return ans;
            }
        }
    }
}
