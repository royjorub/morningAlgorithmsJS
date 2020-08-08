/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.

  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

var num1 = 5
var expected1 = 5

var num2 = 10
var expected2 = 1

var num3 = 25
var expected3 = 7

var num4 = 258 // 2+5+8=15 -> 1+5=6
var expected4 = 6

function sumToOne(num) {
    //convert num to string
    var numstring = num.toString()
    
    // start recursion
    if (numstring.length <= 1) {
      return parseInt(numstring) // base case
    } else {
      sum = parseInt(numstring[0]) + sumToOne(numstring.slice(1, numstring.length)) 
      if (sum >= 10) {
        return sumToOne(sum)
      } else {
        return sum  // first element as int + recursion of rest of digits
      }
    }
}

console.log(sumToOne(258))
/* ******************************************************************************** */

/*
  String Anagrams

  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).

  Ok to use built in methods
*/

var str1 = "lim"
var expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"]
// Order of the output array does not matter

// add params if needed for recursion
function stringAnagrams(str) {
    
}