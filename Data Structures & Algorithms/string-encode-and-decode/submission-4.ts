class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = [];
        for (let s of strs) {
            res.push(s.length + "#" + s);
        }
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        // "5#hello5#world"
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            let wordLength = 0;
            let word = "";
            while (str[j] !== '#') {
            console.log('i = ' + i + " j = " + j)
            j++;
            }
            if (str[j] === "#") {
                wordLength = parseInt(str.slice(i,j));
                console.log(wordLength);
                word = str.slice(j + 1, j + 1 + wordLength);
                i = j + 1 + wordLength;
                console.log(word);
                res.push(word);
            }
        }
        return res;
    }
}
