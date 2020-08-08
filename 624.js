/*
  minToFront
  Given an array, move the minimum value to the front
  return the array after done
  No built in methods
*/

function minToFront(arrz) {
    if(arrz.length > 0){
        var temp = arrz[0];
        for(var i = 0; i < arrz.length; i++){
            if(arrz[i] < temp){
                temp = arrz[i];
                arrz[i] = arrz[0];
                arrz[0] = temp;
            }
        }
    }
    else{
        (console.log("this array needs values"))
    }
    
    return arrz
    }
minToFront([0, 5, 1, 2, 3, 0])


// var temp = 0
// var i = 0-> 1-> 2 -> 3 -> 4 -> 5
// [0, 5, 1, 2, 3, 0] =6 length
// 



const test1 = [1, 5, 2, 9]
// Output:    [1, 5, 2, 9]

const test2 = [5, 1, 0, 2, 3, 0]
// Output:    [0, 5, 1, 2, 3, 0]

const test3 = []
// Output:    []




/*
  removeAt
  Given an array and an index,
  remove the item at that index.
  return the removed item

  No built-in array methods except pop().
*/

const test1Arr = ["a", "b", "c"]
const test1RemoveIdx = 1
const value = removeAt(test1Arr, test1RemoveIdx)
console.log(value)
console.log(test1Arr)
// Output: 'b'
//  - the given array should now be ['a', 'c']

const test2Arr = ["a", "b", "c"]
const test2RemoveIdx = 3
// Output: null

const test3Arr = ["a", "b", "c"]
const test3RemoveIdx = -3
// Output: null
