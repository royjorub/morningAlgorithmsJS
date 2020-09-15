// From a technical interview with an AWS engineer: https://youtu.be/t0OQAD5gjd8

/* 
  Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
  You can assume there is always a valid solution
  These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
  Hard Bonus: make it O(n) time
*/

const nums1 = [1, 1, 1, 2, 2, 3];
const k1 = 2;
const expected1 = [1, 2];
// Explanation: return the two most frequent elements, 1 and 2 are the two most frequent elements

const nums2 = [0, 0, 0, 2, 2, 3];
const k2 = 1;
const expected2 = [0];
// Explanation: k being 1 means return the single most frequent element

const nums3 = [1, 1, 2, 2, 3, 3];
const k3 = 3;
const expected3 = [1, 2, 3];
/* 
  Explanation: 3 is the only value that would be passed in for k because it is the only value for k that has
  a valid solution. Since 1, 2, and 3, all occur 3 times, they are all the most frequent ints, so there is no
  1 most frequent int, or 2 most frequent int, but there are 3 most frequent ints. 
*/

/**
 * Returns the @k most frequently occurring numbers from @nums
 * @param  {Array<number>} nums - Any order
 * @param  {number} k
 *         Represents the amount numbers that should be returned
 * @return {Array<number>}
 *         The k most frequently occurring numbers from @nums
 * Time:   O(...)
 * Space:  O(...)
 */
// function kMostFrequent(nums, k) {
//     let freqTable = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (freqTable.hasOwnProperty(nums[i])) {
//             freqTable[nums[i]]++;
//         }
//         else {
//             freqTable[nums[i]] = 1;
//         }
//     }
//     const sortedKey = [];
//     for (k,v in values.freqTable){

//     }

// }

function kMostFrequentV2(nums, k) {
    if (k <= 0 || Math.floor(k) !== k) { // k must be a positive integer
        return null;
    }
    if (nums.length < k) { // there must be enough elements in nums
        return null;
    }
    let freqMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!freqMap.has(nums[i])) {
            freqMap.set(nums[i], 0);
        }
        freqMap.set(nums[i], freqMap.get(nums[i]) + 1);
    }
    let numsCpy = [];
    freqMap.forEach((_, key) => numsCpy.push(key));
    numsCpy.sort((a, b) => { // sort keys in descending order of frequency
        return freqMap.get(b) - freqMap.get(a);
    });
    return numsCpy.slice(0, k); // cut up to the k keys.
}

module.exports = { kMostFrequent };









// Asked in "Python interview with a LinkedIn engineer: Matching pairs": https://youtu.be/wBXZD436JAg

/*
  Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Bonus: Make it O(n) time
*/

const nums1 = [2, 11, 7, 15];
const targetSum1 = 9;

// Order doesn't matter. Explanation: nums[0] + nums[2] = 2 + 7 = 9
const expected1 = [0, 2];

/**
 * Finds the numbers that add up to @targetSum
 * @param  {Array<number>} nums - Any order
 * @param  {number} targetSum
 * @return {Array<number>}
 *         The two indexes of the numbers in @nums that add up to @targetSum
 * Time:   O(...)
 * Space:  O(...)
 */
function twoSum(nums, targetSum) {
    for (let iPlace = 0; iPlace < nums.length - 1; iPlace++) {
        let iVal = nums[iPlace];
        for (let i = iPlace + 1; i < nums.length; i++) {
            iVal += nums[i];
            if (iVal == targetSum) {
                return [iPlace, i];

            }
            iVal -= nums[i];
        }
    }
}

module.exports = { twoSum };
