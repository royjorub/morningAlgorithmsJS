/* 
  Given a string, containing letters, single digit ints, and question marks
  return whether or not there are exactly 3 question marks between EVERY two ints that add up to 10
    - if there are no two ints that add up to 10, return false

  Helpful functions:
    parseInt(char) => NaN or the string parsed to an int
    isNaN(x) => true or false
      - need to use isNaN if you want to know if something is NaN
      - the number 0 is falsy
      - NaN is falsy
*/

const str1 = "aa6?9";
const expected1 = false;

const str2 = "acc?7??sss?3rr1??????5";
const expected2 = true;

const str3 = "?3?d?dad?7??????3";
const expected3 = true;

const str4 = "7??????3";
const expected4 = false;
// Explanation: too many question marks

/**
 * Determines if there are exactly 3 "?" chars between
 * EVERY two ints that add up to 10.
 * @param   {string} str
 * @return  {boolean}
/**
 * Time:    O(n) linear
 *          n = @str length
 * Space:   O(1)
 */
function questionMarks(str) {
  let prevInt = 0;
  let qMarkCnt = 0;
  let sumTenExists = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?") {
      ++qMarkCnt;
    } else {
      const parsed = parseInt(str[i]);

      // not not a number means it's a number
      if (!isNaN(parsed)) {
        if (prevInt + parsed === 10) {
          sumTenExists = true;

          if (qMarkCnt !== 3) {
            return false;
          }
        } else {
          prevInt = parsed;
          qMarkCnt = 0;
        }
      }
    }
  }
  return sumTenExists ? true : false;
}

module.exports = { questionMarks };



/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.

  i.e., after processing the backspaces, are the two strings equal?

  Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if @S and @T are equal after the backspace
 * characters "#" are processed.
 * @param   {string} S
 * @param   {string} T
 *          @S and @T contain "#" chars which represent
 *          a backspace that needs to be processed.
 * @return  {boolean}
 * Time:    O(n + m + p) -> O(n) linear
 *          n = @S length from the get stack fn
 *          m = @T length from the get stack fn
 *          p = the length of @S and @T after the
 *          backspaces were removed.
 * Best:    O(n + m) because the earliest exit is
 *          after the two getBackspacedStack calls.
 * Space:   O(n + m)
 */
function backspaceStringCompare(S, T) {
  const sBackspaced = getBackspacedStack(S);
  const tBackspaced = getBackspacedStack(T);

  if (sBackspaced.length !== tBackspaced.length) {
    return false;
  }

  for (let i = 0; i < sBackspaced.length; i++) {
    if (sBackspaced[i] !== tBackspaced[i]) {
      return false;
    }
  }
  return true;
}

function getBackspacedStack(str) {
  const backspacedStack = [];

  for (const char of str) {
    if (char !== "#") {
      backspacedStack.push(char);
    } else if (backspacedStack.length > 0) {
      backspacedStack.pop();
    }
  }

  return backspacedStack;
}

function backspaceCompare2(S, T) {
  let sBackspaced = processBackspaces(S);
  let tBackspaced = processBackspaces(T);

  if (sBackspaced === tBackspaced) {
    return true;
  } else {
    return false;
  }
}

function processBackspaces(s) {
  let backspaceCount = 0;
  let newS = "";

  for (let i = s.length - 1; i >= 0; --i) {
    let isBackspace = s[i] === "#";

    if (backspaceCount > 0 && !isBackspace) {
      backspaceCount--;
    } else if (isBackspace) {
      backspaceCount++;
    } else {
      newS = s[i] + newS;
    }
  }
  return newS;
}

module.exports = { backspaceStringCompare };
