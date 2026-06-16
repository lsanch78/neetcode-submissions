class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {


        // sorting, then comparing time: O(nlogn), space: O(1)
        let sSorted = s.split('').sort().join('');
        let tSorted = t.split('').sort().join('');

        return sSorted === tSorted;
        // Hashmap {letter : occurence} time: O(n), space: O(1)
        // If s.length !== t.length return false early
        // loop through each one, add the occurence into maps, compare

        // if (s.length !== t.length) return false;
        // const map1 = new Map();
        // const map2 = new Map();

        // // we are going into first string and adding each elem + their occurence
        // for (let c of s) {
        //     if (map1.has(c)){
        //         let val = map1.get(c);
        //         val++;
        //         map1.set(c, val);
        //     } else {
        //         map1.set(c,0);
        //     }
        // }

        // console.log(map1);

    

        // ASCII character codes, compare them using math. time: O(1), space: O(1)


    }
}
