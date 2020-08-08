"use strict";
/*
  String: Dedupe

  Remove duplicate characters
    - (case-sensitive)

  Bonus: Keep only the last instance of each character.
*/

function deDupe(str: string): string {
    let charsTracked = {};
    let retr = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str.charAt(i);
        if (!charsTracked.hasOwnProperty(currChar)) {
            charsTracked[currChar] = true;
            retr = retr + currChar;
        }
    }
    return retr;

const test1 = "abcABC"
// Output: "abcABC"

const test2 = "helloo"
// Output: "helo"

// ************************************

/*
  Reverse words
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

function revWords(str: string): string {

    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let revWord = "";
        for (let j = words[i].length - 1; j >= 0; j--) {
            revWord = revWord + words[i].charAt(j);
        }
        words[i] = revWord;
    }
    return words.join(" ");}


const testt1 = "hello"
// Output: "olleh"

const testt2 = "hello world"
// Output: "olleh dlrow"

const testt3 = "abc def ghi"
// Output: "cba fed ihg"