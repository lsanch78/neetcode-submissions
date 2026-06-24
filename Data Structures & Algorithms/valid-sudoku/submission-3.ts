class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowSet = Array.from({ length: 9 }, () => new Set());
        const colSet = Array.from({ length: 9 }, () => new Set());
        const boxSet = Array.from({ length: 3 }, () => Array.from({length : 3}, () => new Set()));

        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board.length; c++) {
                let val = board[r][c];
                if (val === '.') continue;

                let boxRow = Math.floor(r/3);
                let boxCol = Math.floor(c/3);

                if (rowSet[r].has(val) ||
                    colSet[c].has(val) ||
                    boxSet[boxRow][boxCol].has(val)
                    ) {
                        return false;
                    }

                rowSet[r].add(val);
                colSet[c].add(val);
                boxSet[boxRow][boxCol].add(val);
            }
        }

        return true;
    }
}
