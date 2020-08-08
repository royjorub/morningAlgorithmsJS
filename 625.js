/*
  secondLargest()
  Array: Second-Largest
  Return the second-largest element of an array, or null if there is none.
  Bonus: do it with one loop and no nested loops
*/

const test1 = [2, 3, 1, 4]
const answer = secondLargest(test1)
console.log(answer)
console.log(secondLargest(test1))
// Output: 3



function secondLargest(test){
    var sLargest = null;
    var largest = test[0];
    for(var i = 1; i < test.length; i++){
        if(test[i] > largest){
            sLargest = largest;
            largest = test[i];
        }
    }
    return sLargest

}
console.log(secondLargest([2,3,1,4]))

secondLargest([2,3,1,4])
// var sLargest =null->2 -> 3
// var largest =2 -> 3 -> 4
// i = 1 -> 2 -> 3 -> 4
// const test1 = [2, 3, 1, 4]


const test2 = [3, 3]
secondLargest(test2)
// Output: null

const test3 = [2]
secondLargest(test3)
// Output: null

const test4 = []
secondLargest(test4)
// Output: null

/*
  sumArrColumns()
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

const test1ArrA = [1, 2, 3]
const test1ArrB = [4, 5, 6]
sumArrColumns(test1ArrA, test1ArrB)
// Output:        [5, 7, 9]

function sumArrColumns(arr){ 

}

sumArrColumns(test1ArrA,test1ArrB)



/*
  flatten2dArray()
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
  */

// this given array has a length of 3 because it has 3 arrays as items
const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
flatten2dArray(test1)
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const test2 = [[1], [2], [3]]
flatten2dArray(test2)
// Output: [1, 2, 3]

const test3 = [[], [], [10, 20]]
flatten2dArray(test3)
// Output: [10, 20]

/*
  flatten2dArray()
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
  */

// this given array has a length of 3 because it has 3 arrays as items

// var test2 = [[1], [2], [3]]
// flatten2dArray(test2)
// Output: [1, 2, 3]

// var test3 = [[], [], [10, 20]]
// flatten2dArray(test3)
// Output: [10, 20]

var test1 = [
    // 0  1   2
    [1, 2, 3], // 0
    [4, 5, 6], // 1
    [7, 8, 9], // 2
  ]
  // console.log(test1[1][1])
  // var array = []
  
  flatten2dArray(test1)
  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  
  function flatten2dArray(twoDArray) {
    // create a variable for the new array
    var newArray = []
    // loop to read the twoDArray
    // outer loop
    for (var outterIndex = 0; outterIndex < twoDArray.length; outterIndex++) {
    //   console.log("*".repeat(10))
    //   console.log("outer loop")
    //   console.log("outterIndex:", outterIndex)
    //   console.log(twoDArray[outterIndex]) // inner array
      var innerArray = twoDArray[outterIndex]
      for (var innerIndex = 0; innerIndex < innerArray.length; innerIndex++) {
        // console.log("*".repeat(10))
        // console.log("inner loop")
        // console.log("innerIndex:", innerIndex)
        // console.log(innerArray[innerIndex])
        newArray.push(innerArray[innerIndex])
      }
      console.log("end of outter for loop")
    }
    // return the new array
    console.log(newArray)
    return newArray
  }
  