/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)

  Venn Diagram Visualization: https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const test1SetA = [1, 2];
const test1SetB = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const test2SetA = [1, 2, 3];
const test2SetB = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const test3SetA = [4, 1, 2, 3, 4];
const test3SetB = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

/**
 * Produces the symmetric differences, aka disjunctive union of two sets
 * Venn Diagram Visualization: https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * @param  {Array<number>} setA
 * @param  {Array<number>} setB
 *         @setA and @setB are both multisets in any order (contain dupes)
 * @return {Array<number>}
 *         The union of @setA and @setB but excluding the shared values (union without intersection)
 *         i.e., if the element is in one array and NOT the other, it should be included in the return.
 * Time:   O(...)
 * Space:  O(...)
 */
function symmetricDifferences(setA, setB) {
    const symDiffArr = []
    for (let index = 0; index < setA.length; index++) {
        if (!setB.includes(setA[index]) && !symDiffArr.includes(setA[index])){
            symDiffArr.push(setA[index]);
        }
    }
    for (let index = 0; index < setB.length; index++) {
        if (!setA.includes(setB[index]) && !symDiffArr.includes(setB[index])){
            symDiffArr.push(setB[index]);
        }
    }
    return symDiffArr;
}

// filteredResult = filteredResult.filter(e => !e.selectedFields.includes("Red"))

module.exports = { symmetricDifferences };



// Interview Algo given to alumni

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

/**
 * Finds all the sets of consecutive numbers that add up to the @targetSum
 * @param {Array<number>} nums - Any order.
 * @param {number} targetSum
 * @return {Array<Array<number>>} - 2d array where each nested array
 *         is a set of consecutive numbers that add up to the @targetSum
 *         Consecutive in this context means the numbers whose indexes are one after the other only.
 * Time:   O(...)
 * Space:  O(...)
 */


function findConsqSums(nums, sum){
    const consqSumsArr = []
    for (let index = 0; index < nums.length; index++) {
        const sumFromIndex = []
        let sumForward = 0;
        for (let j = index; index < nums.length-j; j++) {
            sumFromIndex.push(nums[j])
            sumForward += nums[j];
            if (sumForward > sum){
                break
            }
        }
        if (sumForward == sum){
            consqSumsArr.push(sumFromIndex)
        }
    }
}

module.exports = { findConsqSums };

// Adrian's version - includes possibility of 0's and negative numbers
function findConsqSums2(nums, targetSum) {
  if (nums.length < 1) {
      return [];
  }
  let newArr = [];
  for (let k = 0; k < nums.length; k++) {
      let subArr = [nums[k]];
      let subSum = nums[k];
      for (let p = k+1; p < nums.length; p++) {
          subArr.push(nums[p]);
          subSum += nums[p];
          if (subSum == targetSum) {
              newArr.push(subArr);
              subArr = [...subArr]; // Must do so that it's a NEW array, otherwise it won't be stored correctly in output
          }
      }
  }
  return newArr;
}
// Good test case: findConsqSums([1,3,4,5,0,9,8,1,4,9,0,0,8,2,-1,2,-1],9)

/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

/**
 * Finds all the non-consecutive numbers from @sortedNums
 * @param    {Array<number>} sortedNums
 * @typedef  {Array<{i: number, n: number}>} output - Array of objects
 * @property {number} i
 *           The index of the non consecutive number
 * @property {number} n
 *           The non consecutive number itself that is at the @i position
 * @return   {output}
 *           Array of objects that detail the found non-consecutive numbers
 *           and their location, see above typedef.
 * Time:     O(...)
 * Space:    O(...)
 */
function allNonConsecutive(sortedNums) {
  if (sortedNums.length <= 1) { // If array is empty or has only 1 element - nothing to look at
      return [];
  }
  const numArr = [];
  for (let k = 1; k < sortedNums.length; k++) {
      if (sortedNums[k] - sortedNums[k-1] != 1) { // Number is not one above previous one
          numArr.push({
              i: k,
              n: sortedNums[k]
          });
      }
  }
  return numArr;
}

module.exports = { allNonConsecutive };
