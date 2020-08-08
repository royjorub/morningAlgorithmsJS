function rotateStr(str: string, rotationAmount: number = 0) {
    if (str.length <= 0) {
        return "";
    }
    let retr = "";
    for (let i = 0; i < str.length; i++) {
        let adjustedIndex = (i - rotationAmount) % str.length;
        if (adjustedIndex < 0) {
            adjustedIndex += str.length;
        }
        retr = retr + str.charAt(adjustedIndex);
    }    
    return retr;
}

function isRotation(strA: string, strB: string) {
    if (strA.length !== strB.length) {
        return false;
    }

    if (strA.length === 0) {
        return true;
    }

    for (var i = 0; i < strB.length; i++) {
        if (strA === rotateStr(strB, i)) {
            return true;
        }
    }
    return false;
}

/*
  String: Rotate String

  Create a standalone function that accepts a string and an integer, and rotates the characters in the string to the right by that given integer amount.
*/

const test0Str = "Hello World"
const test0RotateAmnt = 0
// Output: "Hello World"

const test1Str = "Hello World"
const test1RotateAmnt = 1
// Output: "dHello Worl"

const test2Str = "Hello World"
const test2RotateAmnt = 2
// Output: "ldHello Wor"

const test4Str = "Hello World"
const test4RotateAmnt = 4
// Output: "orldHello W"

// **************************

/*
  String: ionIs Rotat (Is Rotation)

  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const test1StrA = "ABCD"
const test1StrB = "CDAB"
// Output: true
//   - if you start from A in the 2nd string, the letters are in the same order, just rotated

const test2StrA = "ABCD"
const test2StrB = "CDBA"
// Output: false
//   - all same letters in 2nd string, but out of order