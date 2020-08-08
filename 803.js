// MON

/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable sort
  
  Time Complexity
    - Best:     O(n) linear when array is already sorted
    - Average:  O(n^2) quadratic
    - Worst:    O(n^2) quadratic when the array is reverse sorted
  Space: O(1) constant
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indicies, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

function bubbleSort(nums){

}

/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum value, and moving it to the beginning of the list. Then, ignoring the first position, which is now sorted, iterate through the list again to find the next minimum value and move it to index 1. This continues until all values are sorted.
  Unstable sort
  
  Time Complexity
    - Best:     O(n^2) quadratic
    - Average:  O(n^2) quadratic
    - Worst:    O(n^2) quadratic
  Space: O(1) constant
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example, you run selection sort for 10 iterations only to display the first 10 sorted items
*/

function selectionSort(nums){

}

// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// TUE

/* 
  - Visualization with playing cards (scroll down): https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/insertion-sort
  - Array / bar visualization: https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
  - Stable sort, efficient for small data sets or mostly sorted data sets
  Time Complexity
    - Best:     O(n) linear when array is already sorted
    - Average:  O(n^2) quadratic
    - Worst:    O(n^2) quadratic when the array is reverse sorted
  Space: O(1) constant
  - this sort splits the array into two portions (conceptually, not literally)
  - the left portion will become sorted, the right portion (that hasn't been iterated over yet) is unsorted
  // can shift OR swap target element until it reaches desired position
  // shifting steps:
  1. consider the first item as sorted
  2. move to the next item
  3. store current item in a temp var (to make this position availale to shift items)
  4. if item to the left of current is greater than current item, shift the left item to the right
  5. repeat step 4 as many times as needed
  6. insert current item
  7. move to the next item and repeat
  // swap steps:
  1. consider the first item as sorted
  2. move to the next item
  4. if item to left of current item is less than current, swap
  5. repeat step 4 until item to left is less than current item
  6. move to next item and repeat
*/

function insertionSort(nums){

}


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// WED

/* 
  http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2140
  Stable sort
  Visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case:    O(n log(n)) linearithmic
    - Average case: O(n log(n)) linearithmic
    - Worst case:   O(n log(n)) linearithmic
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single sorted array
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the previously created merge function
      - splitting of arrays stops when array can no longer be split
      - an array of 1 item is by definition sorted, so two arrays of 1 item can therefore be merged into a sorted array
*/

function mergeSort(nums){

}


// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//

// THUR

/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be the last idx
    - later these params will be used to specify a sub section of the array to partition
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually from the middle idx, last idx, or a random idx
  2. Partition the array IN PLACE such that all values less than the pivot value are to the left of it
  and all values greater than the pivot value are to the right (not perfectly sorted)
  3. return: new idx of the pivot value or the index where the left section of smaller items ends
  "Choosing a random pivot minimizes the chance that you will encounter worst-case O(n2) performance (always choosing first or last would cause worst-case performance for nearly-sorted or nearly-reverse-sorted data). Choosing the middle element would also be acceptable in the majority of cases." https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

function partition(nums){

}



// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//


// FRI

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


function quickSort(nums){

}




// -----------------------------------------------------------------------------------------------//
// -----------------------------------------------------------------------------------------------//