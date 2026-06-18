class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map = new Map();
        let freq = Array.from({ length: nums.length + 1 }, () => []);
        let ans = [];
        for (let n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }

        for (let vals of map.keys()) {
            console.log(vals);
            freq[map.get(vals)].push(vals);
        }

        for (let i = freq.length - 1; i >= 0; i--) {
            for (let vals of freq[i]) {
                ans.push(vals);
                k--;
                if (k === 0) return ans;
            }
        }
        console.log(map);
        console.log(freq);
        return ans;
    }
}
