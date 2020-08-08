/*
  Frequency
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)

  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not

    Python: dict.has_key(key)
*/

function frequency(arr) {
    freqhash = {};
    for (i = 0; i < arr.length; i++) {
      if (freqhash.hasOwnProperty(arr[i])) {
        freqhash[arr[i]] ++;
      }
      else {
        freqhash[arr[i]] = 1;
      }
    }
    return freqhash;
  }


const test1 = ['a', 'a', 'a']
/*
  Output: {
    a: 3
  }
*/

  const test2 = ['a', 'b', 'a', 'c', 'B', 'c', 'c', 'd']
/*
  Output: {
    a: 2,
    b: 1,
    c: 3,
    B: 1,
    d: 1
  }
*/

const test3 = [],
// Output: {}

// ***********************************

/*
  Reverse Word Order

  Create a function that, given a string of words (with spaces), returns new string with words in reverse sequence.
*/


function reverseWord(str) {
    var newStr = ""
    var newStrArr = str.split(" ");
    newStrArr.reverse();
    for (i = 0; i < newStrArr.length; i++) {
      newStr +=  newStrArr[i];
      if (i === newStrArr.length - 1) {
        continue;
      }
      else {
        newStr += " "
      }
    }
    return newStr
  }

const test1 = "This is a test";
// Output: "test a is This";