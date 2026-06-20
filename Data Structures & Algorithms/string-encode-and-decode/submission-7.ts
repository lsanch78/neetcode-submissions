class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */

    // Unlikely Char Method: using an out-of-reach char as delimiter,
    // simply split and join the words by this delimiter.
    // Time Complexity: O(n), Space Complexity: O(n)
    // This method is fragile, and not a solution for every string
    

    // Prefix Encoding Method: wrap every word in an encoding with length and delimiter
    // For example 'word','lol' => '4#word3#lol'
    // encoding is trivial, decoding uses two pointers to slice correct indexes and rebuild
    // Time Complexity: O(n), Space Complexity: O(n)
    // This method IS a general solution to the problem and can be used for every string.


    encode(strs: string[]): string {
        // Time Complexity: O(n)
        let res = [];
        for (let s of strs) {
            res.push(s.length + "#" + s);
        }
        return res.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            // Word Building Declarations
            let wordLength = 0; 
            let word = "";

            // Parse number before delimiter
            wordLength = Number(str.slice(i, j));
            // Extract word after delimiter, push onto result
            word = str.slice(j + 1, j + 1 + wordLength);
            res.push(word);

            // Advance i to next char after delimiter
            i = j + 1 + wordLength;

        }
        return res;
    }
}
