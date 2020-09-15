// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];
  const expected = 2;
  /* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */
  
  /**
   * Calculates the absolute diagonal difference of a square matrix
   * @param   {Array<Array<number>>} sqrMatrix
   *          2d array of numbers representing a square matrix (rows and columns)
   * @return  {number}
   *          Represents the absolute (Math.abs) difference between
   *          the top left to bottom right diagonal and the top right to bottom left diagonal
   * Time:    O(...)
   * Space:   O(...)
   */
  function diagonalDifference(sqrMatrix) {
    const numberOfRows = sqrMatrix.length;
    let sumTopLeftToBottomRight = 0;
    let sumTopRightToBottomLeft = 0;
    for (let i = 0; i<numberOfRows; i++){
        sumTopLeftToBottomRight += sqrMatrix[i][i];
    }
    let innerArray = 0
    for (let i = numberOfRows-1; i>=0; i--){
        sumTopRightToBottomLeft += sqrMatrix[i][innerArray]
        innerArray ++
    }
    return Math.abs(sumTopRightToBottomLeft - sumTopLeftToBottomRight)

  }
  
  function diagonalDifference2(sqrMatrix) {
    if (sqrMatrix.length <= 0) {
        return 0;
    }
    const numRows = sqrMatrix.length - 1; // Number of rows (and columns) in indexed form
    let rowNum = 0; // Starting row number
    // Initialize sums
    let topLeftDiag = 0;
    let topRightDiag = 0;
    // Loop for each row
    while (rowNum <= numRows) {
        topLeftDiag += sqrMatrix[rowNum][rowNum];
        topRightDiag += sqrMatrix[rowNum][numRows-rowNum];
        rowNum++; // Increment row number
    }
    // Return absolute difference in sums
    return Math.abs(topLeftDiag-topRightDiag);
  }

  module.exports = { diagonalDifference };
  








  /* 
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurrences from one array.

  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param  {Array<number>} sortedA
 * @param  {Array<number>} sortedB
 *         @sortedA and @sortedB are both sorted multisets (contain dupes)
 * @return {Array<number>}
 *         An ordered multiset union of @sortedA and @sortedB
 *         The return should include dupes, but the amount of dupes for each int should be based on
 *         the max amount that dupe appears from one set, not the combined amount from both sets.
 * Time:   O(...)
 * Space:  O(...)
 */
function orderedMultisetUnion(sortedA, sortedB) {
    
}

// From Adrian to Roy: I tested this and it seems to work in all cases
function orderedMultisetUnion2(sortedA, sortedB) {
  if (sortedA.length == 0) {
      return sortedB;
  }
  if (sortedB.length == 0) {
      return sortedA;
  }
  let curANum;
  let curBNum;
  let curAInd = 0;
  let curBInd = 0;
  const unionArr = [];
  while (curAInd < sortedA.length || curBInd < sortedB.length) {
      // console.log("Index A = ",curAInd);
      // console.log("Index B = ",curBInd);
      curANum = sortedA[curAInd];
      curBNum = sortedB[curBInd];
      // Pick number that is smaller
      if (curBInd >= sortedB.length || curANum < curBNum) { // A is bigger or B is done
          unionArr.push(curANum);
          curAInd++;
      } else if (curAInd >= sortedA.length || curANum > curBNum) { // B is bigger or A is done
          unionArr.push(curBNum);
          curBInd++;
      } else { // Both values are equal
          unionArr.push(curANum); // Pick either one - it's the same
          curAInd++; // Increment BOTH indices
          curBInd++;
      }
  }
  return unionArr;
}

module.exports = { orderedMultisetUnion };




/* 
  Union Sorted Arrays

  Efficiently combine two already-sorted multiset arrays
  into a new sorted array containing the multiset union.

  Unions by default will take the set of dupes
  that has the highest occurrences from one array.

  Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA = [1, 2, 2, 2, 7];
const numsB = [2, 2, 6, 6, 7];
const expected = [1, 2, 2, 2, 6, 6, 7];
/* 
  Explanation: Every int from each set is included in the result, for dupes, like 2, include it 3 times,
  because it occurs 3 times at most in ONE set
*/

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param  {Array<number>} sortedA
 * @param  {Array<number>} sortedB
 *         @sortedA and @sortedB are both sorted multisets (contain dupes)
 * @return {Array<number>}
 *         An ordered multiset union of @sortedA and @sortedB
 *         The return should include dupes, but the amount of dupes for each int should be based on
 *         the max amount that dupe appears from one set, not the combined amount from both sets.
 * Time:   O(n) linear, where n = longest length
 * Space:  O(n + m) where n = sortedA.length, m = sortedB.length because if there are no dupes all will be kept from both
 */
function orderedMultisetUnion(sortedA, sortedB) {
  const res = [];
  let idxA = 0,
    idxB = 0;

  while (idxA < sortedA.length || idxB < sortedB.length) {
    if (idxA === sortedA.length) {
      // sortedB is longer, push in all remaining sortedB nums
      res.push(sortedB[idxB++]);
      continue;
    } else if (idxB === sortedB.length) {
      // sortedA is longer, push in remaining sortedA nums
      res.push(sortedA[idxA]);
      indxA++;
      continue;
    }

    if (sortedA[idxA] === sortedB[idxB]) {
      res.push(sortedA[idxA++]);
      idxB++; // since both were same, increment both
    } else if (sortedA[idxA] < sortedB[idxB]) {
      res.push(sortedA[idxA++]);
    } else {
      res.push(sortedB[idxB++]);
    }
  }
  return res;
}

function orderedMultisetUnion2(sortedA, sortedB) {
  let idxA = 0,
    idxB = 0;
  const ret = [],
    len1 = sortedA.length,
    len2 = sortedB.length;

  while (idxA < len1 && idxB < len2) {
    const n1 = sortedA[idxA],
      n2 = sortedB[idxB];

    if (n1 === n2) {
      ret.push(n1);
      idxA++;
      idxB++;
    } else if (n1 < n2) {
      ret.push(n1);
      idxA++;
    } else {
      ret.push(n2);
      idxB++;
    }
  }
  // arrays might be different lengths, if any elems are remaining, concat them
  return ret.concat(sortedA.slice(idxA)).concat(sortedB.slice(idxB));
}

module.exports = { orderedMultisetUnion };
