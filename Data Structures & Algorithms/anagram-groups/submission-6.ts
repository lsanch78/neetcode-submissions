class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        // Sort the words in strs method:
        // Time complexity: O(n * nlogk) where n is num of words, k is chars in words
        // Space complexity: HashMap O(n)

        // Frequency array of strs to avoid sorting time.
        // Time complexity would be O(n), Space complexity: O(n)

        // Global declarations:
        let map = new Map();
        let ans: String[][] = [[]];

        // loop through each string in strs:
        for (let s of strs) {
            // create frequency key of c's of s
            let freqArray = new Array(26).fill(0);
            for (let c of s) {
                freqArray[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }

            let key = freqArray.toString();

            if (map.has(key)) {
                map.get(key).push(s);
            } else {
                map.set(key, []);
                map.get(key).push(s);
            }
        }
        return Array.from(map.values());
    }
}
