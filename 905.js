/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.

  Output: only the shared values between the two arrays (deduped).

  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7]; 
const numsB1 = [2, 2, 6, 6, 7]; 
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

/**
 * Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * @param   {Array<number>} sortedA
 * @param   {Array<number>} sortedB
 *          @sortedA and @sortedB are both sorted multisets
 *          (multi in that it can contain multiple dupes)
 * @return  {Array<number>}
 *          The sorted set intersection: a new array that
 *          is sorted and contains only the shared values
 *          between the two arrays deduped
 * Time:    O(...)
 * Space:   O(...)
 */

function freqTable(sortedA) {
  var obj = {};
  for (var i=0; i<sortedA.length; i++) {
    var character = sortedA[i];
    if (obj.hasOwnProperty(character)) {
      obj[character]++;
    }
    else {
      obj[character] = 1;
    }
  }
  return obj;
}

function orderedIntersection(sortedA, sortedB) {
  objA = freqTable(sortedA);
  var result =[];
  for (var i=0; i<sortedB.length; i++){
    if (sortedB[i] != sortedB[i+1]){
      if (objA.hasOwnProperty(sortedB[i])){
        result.push(sortedB[i]);
      }
    }
  }
  return result;
}

console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));

module.exports = { orderedIntersection };
