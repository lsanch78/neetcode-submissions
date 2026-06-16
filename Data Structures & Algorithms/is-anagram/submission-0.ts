class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        // naive approach would be to sort both and check equality

        let v = s.split('').sort().join('');
        let u = t.split('').sort().join('');
        
        console.log(v + " " + u)

    return v === u;
    }
}
