class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // For every character add all opening brackets to stack
        // if corresponding bracket is not popped then return false

        let stack = [];
        for (let c of s) {
            if (c === '[' ||
                c === '(' ||
                c === '{') {
                    stack.push(c);
                }
            if (c === ']'|| 
                c === ')'||
                c === '}') {
                    if (stack.length === 0) return false;
                    let openingBracket = stack.pop();
                    if (openingBracket === '[' && c!== ']') {
                        return false;
                    }
                    if (openingBracket === '(' && c!== ')') {
                        return false;
                    }
                    if (openingBracket === '{' && c!== '}') {
                        return false;
                    }
                    continue;
                }
        }


    return stack.length === 0;
    }
}
