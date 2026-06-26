class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // Time Complexity: O(n)
        // Space Complexity: O(1)
        let res = [];
        for (let s of strs) {
            res.push(s.length + '#' + s);
        }

        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // Time Complexity: O(n);
        // Space Complexity: O(1);
        // Overall time complexity we have O(n) + O(n) = O(n);
        // Over all space complexity we have O(1) + O(1) = O(1);
        let res = [];

        for (let i = 0; i < str.length; i++) {
            let j = i;

            // Find where j = '#' and i = last char of last word;
            while (str[j] !== '#' && j < str.length) {
                j++;
            }

            // Found length of next string, grab int into length
            let length = parseInt(str.slice(i, j));

            // grab word after delimiter, slice is exclusive so go one past
            let word = str.slice(j + 1, j + 1 + length);
            
            // add word to res array
            res.push(word);
            
            // catch slow pointer up to fast pointer
            i = j + length;
        }

        return res;
    }
}
