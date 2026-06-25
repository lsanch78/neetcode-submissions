class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let sanitized = s.replaceAll(/[^a-zA-Z0-9]/g,'').toLowerCase();
        let i = 0;
        let j = sanitized.length - 1;

        while (i < j) {
            if (sanitized[i] !== sanitized[j]) return false;
            i++;
            j--;
        }

        return true;
    }
}
