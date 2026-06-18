class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();
        const array = Array.from({ length: nums.length + 1 }, () => []);
        const ans = [];

        // Start by iterating through nums and creating a { number : frequency } map
        for (let n of nums) {
            map.set(n, (map.get(n) || 0) + 1);
        }

        // Create an array of nums.length size, index = frequency, element = number list
        for (let m of map.keys()) {
            console.log(m);

            array[map.get(m)].push(m);
        }

        // Iterate backwards until k elems are saved into ans, becase frequency is highest at the end
        for (let i = array.length - 1; i > 0; i--) {
            for (let j of array[i]) {
                ans.push(j);
                k--;
                if (k === 0) return ans;
            }
        }

        // Failure exit
        return [-1];
    }
}
