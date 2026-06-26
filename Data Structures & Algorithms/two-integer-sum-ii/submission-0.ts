class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        
        let ansMap = new Map();
        let res = [];

        for (let i = 0; i < numbers.length; i++) {
            let complimentary = target - numbers[i];


            if (ansMap.has(numbers[i])) {
                
                res.push(ansMap.get(numbers[i]) + 1);
                res.push(i + 1);
            }
            ansMap.set(complimentary, i);
        }
        console.log(res);
        return res;
    }


}
