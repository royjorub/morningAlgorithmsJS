5/*
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25
const expected1 = { quarter: 1 }

const cents2 = 50
const expected2 = { quarter: 2 }

const cents3 = 9
const expected3 = { nickel: 1, penny: 4 }

const cents4 = 99
const expected4 = { quarter: 3, dime: 2, penny: 4 }

function calculateFewestCoinsChange(cents) {
  // algorithm here
  coins = {}
  penny = 1
  nickel = 5
  dime = 10
  quarter = 25

  if (cents >= quarter){
    remainder = cents%quarter //84 cents remainder is 9
    coins['quarter'] = (cents - remainder)/25  //84-9 = 75 / 25 = 3
    cents-=(coins['quarter']*25) //84 - 75 = 9
  }
  if(cents >= dime){
    remainder = cents%dime 
    coins['dime'] = (cents - remainder)/10  
    cents-=(coins['dime']*10) 
  }
  if(cents >= nickel){
    remainder = cents%nickel 
    coins['nickel'] = (cents - remainder)/5  
    cents-=(coins['nickel']*5) 
  }
  if(cents>0){
      coins['penny'] = cents
  }
  return coins
}

const cents4 = 99
calculateFewestCoinsChange(cents4)


/* ******************************************************************************** */

/*
  Missing Value

  You are given an array of length N that contains, in no particular order,
  integers from 0 to N . One integer value is missing.
  Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1]
const expected1 = 2

const nums2 = [3, 0, 1, 2]
const expected2 = null
// Explanation: nothing is missing

/*
  Bonus: now the lowest value can now be any integer (including negatives),
  instead of always being 0.
*/

const nums3 = [2, -4, 0, -3, -2, 1]
const expected3 = -1

const nums4 = [5, 2, 7, 8, 4, 9, 3]
const expected4 = 6

function missingValue(nums) {
  // algorithm here
  var sorted_nums = nums.sort()
  console.log(sorted_nums)

  for (var i = 0; i<nums.length-1; i++){
    if(nums[i+1]!== nums[i]+1) { 
      return nums[i]+1
    }
  }
   return null
}


missingValue([1,6,2,4,5])

// works! nice
// I tried  [0,3,2,1] and it returned 4
// oohh, so maybe until length -1? Yes that would work
// we need an else statement for null too
