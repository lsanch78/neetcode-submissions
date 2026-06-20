class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let res = "";
        for (let s of strs) {
            res += s.length + "#" + s;
        }
        return res;
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
                word = str.slice(j + 1, j + wordLength + 1);
                i = j + wordLength;
                j++;
                console.log(word);
                res.push(word);
            }
            i++;
        }

        return res;
    }
}
