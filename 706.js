/*
  String: Reverse

  Implement reverseString(str)
  abc
  cba
*/


// function reverse(s) {
//     var sNew = '';
//     for (var i = s.length - 1; i >= 0; i--)
//       sNew += s[i];
//     return sNew;
//   }

// console.log(reverse("abc"))

/*
  Acronyms

  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).

  Do it with .split first if you need to, then try to do it without
  hello world -> HW
  how to capitalize? -> str.toUpperCase(); -> this would be all letters. would need to specify I think like string[0]
  push the first character into new string? not push => +=
  */


function acronym(s){
    var acro = s[0];
    for (var i = 1; i < s.length; i ++){
        var letter = s[i]
        if (s[i-1] === " "){
            acro += s[i]
        }
    }
    acro = acro.toUpperCase();
}

acronym("hello, world")
/*
  Case insensitive string comparison

  const test1StrA = "ABC"
  const test1StrB = "abc"
  caseInsensitiveCompare(test1StrA, test1StrB) // Output: true

*/