class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let sanitized = s.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase();
        let l = 0;
        let r = sanitized.length - 1;


        while (l < r) {
            if (sanitized[l] !== sanitized[r]) return false;
            l++;
            r--;
        }

        return true;
    }
}
