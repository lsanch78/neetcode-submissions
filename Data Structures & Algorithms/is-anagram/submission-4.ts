class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // Sorting method: We can sort the characters in strings and use that to compare them to each other 
        // Time Complexity: O(nlogm) because of sorting where m are the characters, Space Complexity: O(1)

        // Frequency array method: to use a 26 char's array as indexes, compare those
        // Time Complexity: O(n), Space complexity O(26) -> O(1)
        let freqArrayS = new Array(26).fill(0);
        let freqArrayT = new Array(26).fill(0);

        // Construct arrays for each word
        for (let c of s) {
            freqArrayS[(c.charCodeAt(0) - 'a'.charCodeAt(0))] += 1;
        }
        for (let c of t) {
            freqArrayT[(c.charCodeAt(0) - 'a'.charCodeAt(0))] += 1;
        }

        // Stringify to safely compare strings, not object references
        return (freqArrayT.toString() === freqArrayS.toString());
    }
}
