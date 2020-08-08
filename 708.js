/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards

  Do not ignore spaces, punctuation and capitalization
 */


function isAPalindrome(str) {
    for (var i = 0; i < str.length; i++ ) //for loop that runs through a word
    {
    if (str[i] != str[str.length - 1 - i])//if statement that checks whether or not
    {
        return false;
    }
    }
    return true;
}

const test1 = "a x a";
// Output: true

const test2 = "racecar";
// Output: true

const test3 = "Dud";
// Output: false

const test4 = "oho!";
// Output: false

const sadiesFavoriteTestCase = "tacocat";
// Output: true


// Ninja Sensei Bonus / Further Study!

/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/

function longestPal(str){

    var longest_current_pal = str[0];  //keeps longest palindrome
    
    for(var length_of_sub=2; length_of_sub<=str.length; length_of_sub++){  //iterate through string

        // if(setInterval(() => {
          
        // }, interval);[i]==str[i+1]){
        //     palindrome = str[i]+str[i+1]
        // }
        // else(str)

        for(var j=0; j<(str.length+1-length_of_sub); j++){
          var temp_sub_string = str.substring(j, j+length_of_sub)
          
          if(isAPalindrome(temp_sub_string)){ //checking substring is a palindrome
            longest_current_pal = temp_sub_string;
            
            console.log("length of sub:")
            console.log(length_of_sub)
            console.log(temp_sub_string)
          }
          
        }
    }

    return longest_current_pal;
  }

  const test01 = "what up, daddy-o?";
  // Output: "dad"
  
  const test02 = "uh, not much";
  // Output: "u"
  
  const test03 = "Yikes! my faavorite racecar erupted!";
  // Output: "e racecar e"
  
  //iterate through the loop
        //iterate through checking remaining character for palindrome
            //if longer palindrome = replace palindrome variable

  function findLongestPalidrome(str){
      var longestPal = str[0]
      var substr
      for(var i = 0; i<str.length; i++){
        //substr = 
        if(isAPalindrome(str.substring(i,str.length)) && (str.length-i)>longestPal.length){
            longestPal = str.substring(i,str.length)
        }
      }
  }

