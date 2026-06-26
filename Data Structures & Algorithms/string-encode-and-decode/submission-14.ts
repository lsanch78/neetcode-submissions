class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        // ["Hello","World"]
        // 5#Hello5#World
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
        // 5#Hello5#World
        let res = [];

        for (let i = 0; i < str.length; i++) {
            let j = i;
            console.log("i = " + str[i] + " j = " + str[j])

            // Find where j = '#' and i = last char of last word;
            while (str[j] !== '#' && j < str.length) {
                j++;
            }

            // Found length of next string, grab int into length
            let length = parseInt(str.slice(i, j));



            // grab word after delimiter, slice is exclusive so go one past
            let word = str.slice(j + 1, j + 1 + length);

            console.log(length);
            console.log(word);
           
            res.push(word);

            
            // catch slow pointer up to fast pointer
            i = j + length;
        }


        return res;
    }
}
