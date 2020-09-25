/* 
  Given an honorific (name title) and array of full name strings,
  in "LastName, FirstName" format
  
  Return a new array of strings in this format: "Honorific FirstName LastName"

  Bonus: re-write it with built in functional programming methods
*/

const honorific1 = "Mr.";
const names1 = [];
const expected1 = [];

const honorific2 = "Sir";
const names2 = ["Sanchez, Rick", "Smith, Jerry"];
const expected2 = ["Sir Rick Sanchez", "Sir Jerry Smith"];

const honorific3 = "Mrs.";
const names3 = ["HorseDoctor, Beth"];
const expected3 = ["Mrs. Beth HorseDoctor"];

/**
 *
 * @param   {string} honorific
 *          The honorific to be added to the @fullNames
 *          e.g., "Sir" or "Mrs."
 * @param   {Array<string>} fullNames
 *          Format "LastName, FirstName"
 * @return  {Array<string>}
 *          The full names formatted:
 *          @honorific FirstName LastName
 * Time:    O()
 * Space:   O()
 */

function addHonorific(honorific, fullNames) {
    if (fullNames.length < 1) {
      return [];
    }
    let titles = [];
  
    for (const name of fullNames){
      const comaIndex = name.indexOf(",");
      let lastName = "";
      let firstName = "";
      for (let i = 0; i < comaIndex; i++){
        lastName += name[i];
      }
      for (let j = comaIndex+2; j < name.length; i++){
        firstName += name[j]
      }
      titles.push(honorific + " " + firstName + " " + lastName)
    }
    return titles
  } 

function addHonorificFunctional(honorific, fullNames) {}

module.exports = {
  addHonorific,
  // addHonorific: addHonorificFunctional
};




/* 
Given two strings, version1, and version2, both representing version numbers
  If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.

  Helpful methods:
    - .split(characterToSplitOn)
      - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
    - .parseInt
      - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails

  Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * @param   {string} v1
 * @param   {string} v2
 * @return  {number}
 *          1 if @v1 greater
 *          -1 if @v1 smaller
 *          0 if equal
 * Time:    O()
 * Space:   O()
 */
function compareVersionNumbers(v1, v2) {}

module.exports = { compareVersionNumbers };
