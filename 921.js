/* 
  Given to me (Neil) in an interview

  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters

  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * @param   {string} str
 * @return  {boolean}
 */
function canStringBecomePalindrome(str) {
    const charTable = {};
    const oddChars = [];
    if (str.length == 0) return false;
    for (const char of str){
        if (char in charTable){
            str[char] ++
        }
        else {
            str[char] = 1
        }
    }
    for (const charKey in charTable){
        if (charTable[charKey] %2 != 0){
            oddChars.push(charKey)
        }
    }
    return oddChars.length <= 1
}

module.exports = { canStringBecomePalindrome };





// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)

  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.

  Return an empty array if the callback never returns true
*/

const nums = [1, 4, 3, 6, 9, 15];

const callback1 = (elem) => {
  return elem > 5;
};
const expected1 = [6, 9, 15];

const callback2 = (elem) => {
  return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0
 * until the callback function returns true when passed the
 * iterated element.
 * @param   {Array<any>} arr
 * @param   {Function} callback
 * @return  {Array<any>}
 *          @arr array with only the remaining items.
 */
function dropIt(arr, callback) {
    if (arr.length < 1) return "nope, empty array"
    for (const element of arr){
        if (callback(element)){
            break
        }
        else {
            arr.shift()
            dropIt(arr, callback)
        }
    }
}

module.exports = { dropIt };