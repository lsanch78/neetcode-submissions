class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {


        // sorting, then comparing time: O(nlogn), space: O(1)
        // let sSorted = s.split('').sort().join('');
        // let tSorted = t.split('').sort().join('');

        // return sSorted === tSorted;
        // Hashmap {letter : occurence} time: O(n), space: O(1)

        if (s.length !== t.length) return false;
        const map = new Map();


        for (let c of s) {
            map.set(c, (map.get(c) | 0 ) + 1);
        }

        for (let c of t) {
            map.set(c, (map.get(c) || 0) - 1);
            if (map.get(c) < 0) return false;
        }
        return true;

        // ASCII character codes, compare them using math. time: O(1), space: O(1)


    }
}
