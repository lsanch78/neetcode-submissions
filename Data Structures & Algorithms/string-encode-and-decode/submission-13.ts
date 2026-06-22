class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // Want to encode string with a delimiter and number before,
        // we can build it using an array and join at the end
        let res = [];
        for (let w of strs) {
            res.push(w.length + '#' + w);
        }
        console.log(res.join(''));
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res = [];
        for (let i = 0; i < str.length; i++) {
            // initialize fast pointer
            let j = i;
            let wordLength = 0;
            
            // find delimiter with fast poitner
            while (str[j] !== '#' && j < str.length) {
                j++;
            }

            // slice length from index i to j
            wordLength = parseInt(str.slice(i, j))
            console.log(wordLength);

            // slice word from j + 1 (c after delimiter) to j + 1 + wordLength;
            let word = str.slice(j + 1, j + 1 + wordLength);
            res.push(word);
            // move slow pointer to fast pointer
            i = j + wordLength;
        }

        console.log(res);
        return res;
    }
}
