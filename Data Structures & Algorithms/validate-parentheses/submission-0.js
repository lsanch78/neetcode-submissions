class Solution {
    /**
 * @param {string} s
 * @return {boolean}
 */
    isValid(s) {
    const stack = [];
    let parens = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }

    for (let c of s) {
        if (parens[c]) {
            stack.push(parens[c])
        } else if (stack.pop() !== c) {
            return false
            }
    } 

    return (!stack.length);
};
}
