/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition

  Steps:

  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx

  2. Partition the array IN PLACE such that all values less than the pivot value are to the left of it
  and all values greater than the pivot value are to the right (not perfectly sorted)

  3. return: new idx of the pivot value or the index where the left section of smaller items ends

  "Choosing a random pivot minimizes the chance that you will encounter worst-case O(n2) performance (always choosing first or last would cause worst-case performance for nearly-sorted or nearly-reverse-sorted data). Choosing the middle element would also be acceptable in the majority of cases." https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
// nums1 example if 3 was pivot value
// doesn't have to be this exactly but this is an acceptable answer: [2, 3, 14, 8, 11, 7]
const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];

/**
 * Partitions the @nums array by mutating it by selecting the number at the middle index (pivot) then arranges
 * all numbers less than the pivot to be to it's left and all larger numbers to the right of the pivot
 * @param   {Array<number>} nums
 *          In any order
 * @param   {number} left
 *          Index indicating the start of the slice of @nums being processed
 * @param   {number} right
 *          Index indicating the end of the slice of @nums being processed
 * @return  {Array<number>}
 *          @nums after being partitioned
 * Time:    O(n) linear, n = nums.length
 * Space:   O(1) constant
 * Hoare’s partitioning scheme, named for Sir Charles Anthony Richard Hoare, who developed the quicksort algorithm in 1959.
 * does fewer swaps than Lomuto
 * NOTE that in this scheme, the pivot’s final location is not necessarily at the index that was returned (some edge cases)
 */
function partition(nums = [], left = 0, right = nums.length - 1) {
  const midIdx = Math.floor((left + right) / 2);
  const pivotVal = nums[midIdx];

  while (left < right) {
    while (nums[left] < pivotVal) {
      left++;
    }

    while (nums[right] > pivotVal) {
      right--;
    }
    // array destructure swap syntax
    [nums[left], nums[right]] = [nums[right], nums[left]];
  }
  return left;
}

module.exports = { partition };



/* 
  Visualization https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

  Create a function that uses yesterday’s partition to fully sort an array in-place.

  Unstable sort
  
  Time Complexity
    - Best: O(n log(n)) linearithmic
    - Average: O(n log(n)) linearithmic
    - Worst: O(n^2) quadratic
  
  Space: O(1) constant

  Params: nums, left, right
  - left and right are indexes, for now, left will be 0, and right will be the last idx
  - later these params will be used to specify a sub section of the array to partition

  Steps:
    - start by partitioning the full array (use the previously built partition algo)
    - then partition the left side of the array (left of the returned partition idx) and the right side (right of the returned partition idx), recursively
*/


const nums1 = [11, 8, 14, 3, 6, 2, 7];
const expected1 = [2, 3, 6, 7, 8, 11, 14];

const nums2 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const expected2 = [1, 3, 4, 9, 12, 13, 17, 21, 27];

/**
 * Recursively sorts @nums by mutating the array
 * @param   {Array<number>} nums
 *          In any order
 * @param   {number} left
 *          Index indicating the start of the slice of @nums being processed
 * @param   {number} right
 *          Index indicating the end of the slice of @nums being processed
 * @return  {Array<number>}
 *          @nums after being sorted
 * Best:    O(n log(n)) linearithmic
 * Average: O(n log(n)) linearithmic
 * Worst:   O(n^2) quadratic
 */
function quickSort(nums = [], left = 0, right = nums.length - 1) {
    if (left < right) {
      const pivotIndex = partition(nums, left, right);
      quickSort(nums, left, pivotIndex - 1);
      quickSort(nums, pivotIndex + 1, right);
    }
    return nums;
  }
  
  module.exports = { quickSort };
  
module.exports = { quickSort };