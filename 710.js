/*
Zip Arrays into Map


Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

Associative arrays are sometimes called maps because a key (string) maps to a value
 */

const test1Keys = ["abc", 3, "yo"]
const test1Vals = [42, "wassup", true]
//                        Paramenters
function zipArrayIntoMap(arr1, arr2) {
    if (arr1.length != arr2.length){
        return false
    }
    var newDict = {}

    // newDict.abc = 42
    // console.log(newDict)
  // code here
    for (var i = 0; i < arr1.length; i++){
        newDict[arr1[i]] = arr2[i]   
    }
    return newDict
}
// Arguments
zipArrayIntoMap(test1Keys, test1Vals)

//  i = 0
// arr1[0] = arr2[0]

/*
Output: {
    "abc": 42,
    3: "wassup",
    "yo": true
}
*/

// ****************************************

/*
Invert Hash

A hash table / hash map is an obj / dictionary

Build invertHash(hashTable) to "swap" hash keys to values, and values to keys.
*/

const input1 = { name: "Zaphod", charm: "high", morals: "dicey" }
// Output: {Zaphod: "name", high: "charm", dicey: "morals"}