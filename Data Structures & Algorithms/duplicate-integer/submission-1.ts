class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
    
    // Naive solution would be a nested for loop where we grab
    // each elem and compare to every other elem, if elem === elem
    // return true. Time: O(n^2) Space would be O(n)

    // Optimized solution: create a map where we only have to loop
    // through the array one time while comparing with .has(elem)
    // to the hashmap, OR we can create a set which automitically 
    // does this for us. Time: O(n) Space: O(2n) -> O(n) 

    const numsSet = new Set(nums);

    // if numSet is less than nums, then we MUST have repeating chars
    // Set dedupes arrays by only allowing one element of same value
    return numsSet.size < nums.length;
    }
}
