class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // Gauntlet solution, if passes all checks return true, else false
        // Time Complexity: O(1) <-- Sudoku is always 81 size, so O(1);
        // Space Complexity: O(1)
        let rows = Array.from({ length: 9 }, () => new Set());
        let cols = Array.from({ length: 9 }, () => new Set());
        let box = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Set()));

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let val = board[r][c];
                if (val === ".") continue;

                // Assign 3x3 matrix transformation to box sets
                let boxR = Math.floor(r / 3);
                let boxC = Math.floor(c / 3);

                // If fail any checks, return false
                if (rows[r].has(val) || cols[c].has(val) || box[boxR][boxC].has(val)) {
                    return false;
                }

                rows[r].add(val);
                cols[c].add(val);
                box[boxR][boxC].add(val);
            }
        }

        return true;
    }
}
