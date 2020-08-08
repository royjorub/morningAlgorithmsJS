/*
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).

  Return -1 if none exist.
*/

function balanceIndex(arr) {
    // check if array >= 3
      if(arr.length<3){
        return -1
      }  
    
      var tempStart = arr[0]  //-2 + 5 = 3
      var tempEnd = arr [arr.length-1]  //3 + 0 = 3
      var arrLength = arr.length-2 // 3 -1 = 2 -1 = 1
  
  // and array length -1
      for (var i = 1; i < arr.length; i++) {
        if (tempEnd >= tempStart && arrLength > 1){ 
          tempStart += arr[i]
          arrLength --
        
        }
        else if(tempEnd >= tempStart && arrLength == 1){
          return i
        }
  
        for (var j = arr.length - 2; j >= 0; j--){
          if (tempStart >= tempEnd && arrLength > 1){
            tempEnd += arr[j]
            arrLength --
          }
        }
        
      }
      }
  
  
  
  const test0 = [3, 2, 1]
  
  const test1 = [-2, 5, 7, 0, 3]
  // Output: 2
  
  const testsamp = [7, 3, 2, 4, 6]
  
  const testlopsided = [8, 2, 6, 1, 2, 3, 4]
  
  const test2 = [9, 9]
  // Output: -1
  
  console.log(balanceIndex(test0))
  console.log(balanceIndex(test1))
  console.log(balanceIndex(test2))
  // *****************************************************************************
  
  /*
    Balance Point
  
    Write a function that returns whether the given
    array has a balance point BETWEEN indices,
    where one side’s sum is equal to the other’s.
  */
  
  const test1 = [1, 2, 3, 4, 10]
  // Output: true (between indices 3 & 4)
  
  const test2 = [1, 2, 4, 2, 1]
  //  Output: false
  