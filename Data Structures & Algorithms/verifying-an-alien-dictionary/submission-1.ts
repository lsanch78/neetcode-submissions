class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words: string[], order: string): boolean {
        // Gauntlet approach: create a map with { char : index } to easily compare two words at the same time
        // Failing guards: If all chars are equal BUT word2.length> word1.length = Fail
        // If char of word1 comes after current char of word 2 = Fail
        // If char of word1 comes before current char of word 2 && is different = Success, break
        let map = new Map();

        for (let i = 0; i < order.length; i++) {
            map.set(order[i], i);
        }
        console.log(map)

        // Loop through words, loop through chars

        for (let i = 0; i < words.length - 1; i++) {
            let word1 = words[i];
            let word2 = words[i+1];
            let tie = false;

            for (let j = 0; j < word1.length && j < word2.length; j++){
                if (map.get(word1[j]) < map.get(word2[j])) break;
                if (map.get(word1[j]) > map.get(word2[j])) return false;
                // Case where all chars are equal but word2 is shorter should be false
                if (j === word2.length - 1) tie = true;
            }
            if (word1.length > word2.length && tie) return false;

        }




        return true;
    }
}
