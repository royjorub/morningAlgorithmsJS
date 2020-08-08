/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const nums1 = [1, 3, 5, 6]
const searchNum1 = 4
const expected1 = false
const iStart = 0
const expectedResult = false


const nums2 = [4, 5, 6, 8, 12]
const searchNum2 = 5
const expected2 = true

const nums3 = [3, 4, 6, 8, 12]
const searchNum3 = 3
const expected3 = true

// add params if needed for recursion
function rBinarySearch(sortedNums, searchNum, iStart, expectedResult) { 
    if (iStart == sortedNums.length-1){
        return sortedNums[iStart]
    }
    if (sortedNums[iStart] == searchNum){
        expectedResult = true
        return expectedResult
    } 
    else {
        rBinarySearch(nums1, searchNum1, iStart+1) 
    }
}
console.log(rBinarySearch(nums1, searchNum1, iStart, expectedResult))



//  i = 0 1 2 3 4 length-1
/* ******************************************************************************** */

/*
  Recursively reverse a string
  helpful methods:

  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc"
const expected1 = "cba"

function revStr(str) {}