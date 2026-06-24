class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        console.log(str);
        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            console.log("comparing :" + str[i] + " = " + str[j])
            if (str[i] !== str[j]) return false;
            i++;
            j--;
        }        

        return true;
    }   
}
