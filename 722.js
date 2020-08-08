/*
  Array: Remove Duplicates

  Given a SORTED array of integers, dedupe the array
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1]
const expected1 = [1]

const nums2 = [1, 1, 2, 2, 3, 3]
const expected2 = [1, 2, 3]

const nums3 = [1, 1, 2, 3, 3, 4]
const expected3 = [1, 2, 3, 4]

function removeDuplicates(nums) {
  // algorithm here
}

// ******************************************************************

/*
  Array: Mode

  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.

  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = []
const expected1 = []

const nums2 = [1]
const expected2 = [1]

const nums3 = [5, 1, 4]
const expected3 = []

const nums4 = [5, 1, 4, 1]
const expected4 = [1]

const nums5 = [5, 1, 4, 1, 5]
const expected5 = [5, 1]
//  - order doesn't matter

function findAllModes(nums) {
  // algorithm here
}



"use strict";

function dedupedOrderedArr(arr: number[]) {
    if (arr === null) {
        return null;
    }
    if (arr.length <= 0) {
        return [];
    }
    let retr = [arr[0]];
    let currNum = retr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== currNum) {
            retr.push(arr[i]);
            currNum = arr[i];
        }
    }
    return retr;
}

function dedupedOrderedArr3(arr: number[]) {
    if (arr === null || arr.length <= 0) {
        return arr;
    }
    let i = 0, j = 1;
    while (j < arr.length) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    i++;
    while (arr.length > i) {
        arr.pop();
    }
    return arr;
}


function mode(arr: number[]): number[] {
    if (arr === null) {
        return null;
    }
    if (arr.length === 0) {
        return [];
    }
    let freqMap = {};
    let record = 0;
    for (let num of arr) {
        if (!freqMap.hasOwnProperty(num)) {
            freqMap[num] = 0;
        }
        freqMap[num] += 1;
        if (record < freqMap[num]) {
            record = freqMap[num];
        }
    }
    let retr = [];
    for (let num in freqMap) {
        if (freqMap[num] === record) {
            retr.push(parseFloat(num));
        }
    }
    if (retr.length === Object.keys(freqMap).length) {
        return [];
    }
    return retr;
}


// --------------

// def dedupedOrderedArr2(arr):
//     for x in Range(1,arr):
//         if arr[x] == arr[x-1]:
//             arr.pop(x-1]
