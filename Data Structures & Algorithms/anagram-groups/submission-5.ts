class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();

        for (let s of strs) {
            const freqArray = Array(26).fill(0);

            // For every c in string, gen freq map key, check if exists: if yes, add to list. if no, create new list
            for (let c of s) {
                freqArray[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
            }
            let key = freqArray.join(',');

            if (map.has(key)) {
                map.get(key).push(s);
            } else {
                map.set(key, [s]);
            }
        }
        return Array.from(map.values());
    }
}
