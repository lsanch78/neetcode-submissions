class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowSets = Array.from({ length: 9 }, () => new Set());
        const colSets = Array.from({ length: 9 }, () => new Set());
        const boxSets = Array.from({ length: 3 }, () => Array.from({length:3}, () => new Set()));


        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let val = board[r][c];

                if (val === '.') continue;
                
                let boxRow = Math.floor(r/3);
                let boxCol = Math.floor(c/3);

                if (rowSets[r].has(val) ||
                    colSets[c].has(val) ||
                    boxSets[boxRow][boxCol].has(val)
                    ) {
                        return false;
                    }
                rowSets[r].add(val);
                colSets[c].add(val);
                boxSets[boxRow][boxCol].add(val);
            }
        }

        return true;
    }
}
