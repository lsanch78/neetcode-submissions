class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
 
        // one solution is to loop through the array of strings, create a HashMap in the shape of { sorted : acualwords[] }
        // if sorted word exists, append to value else create it. 
        // time complexity is: O(n) * O(nlogn), space complexity is: O(n)
        let ans: string[][] = [[""]];
        let map = new Map();

        // Loop through strs
        for (let i = 0; i < strs.length; i++) {
            
            // Sort str
            let sorted = strs[i].split('').sort().join('');

            // if map has sorted append, else start new
            if (map.has(sorted)){
                map.get(sorted).push(strs[i])
            } else {
                let valueArray: string[] = [strs[i]];
                map.set(sorted, valueArray)
            }
        }

        // Finally convert Map to Array using Array method
        ans = Array.from(map.values())
        return ans;
    }
}
