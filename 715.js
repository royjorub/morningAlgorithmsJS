/*
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears.
  */

function encode(str){
    var newStr = ''
    for (var i = 0; i < str.length; i++){
        if (str[i] == str[i+1]){
            var counter = 1;
            while (str[i] == str[i+1]){
                counter ++
                i++
            }
            newStr += str[i] + counter
        }
        else{
        var counter2 = 1
        newStr += str[i] + counter2
        }
    } 
}

console.log(encode('aaaar'))
// var newStr = 'a4'
// var counter 4
// for loop that would check if i = i+1, counter ++

 const test1 = "aaaabbcddd"
 // Output: "a4b2c1d3"
 
 const test2 = ""
 // Output: ""
 
 const test3 = "a"
 // Output: "a1"
 
 const test4 = "bbcc"
 // Output: "b2c2"
 
 //  **********************
 
 /*
 String Decode
 */
 
 const test1 = "a3b2c1d3"
 // Output: "aaabbcddd"
 
 //  **********************
 
 // How would you compress this?
 
 const twoDScreen = [
   ["r", "o", "y", "g", "c", "b", "p"],
   ["r", "o", "y", "g", "c", "b", "p"],
   ["r", "o", "y", "g", "c", "b", "p"],
   ["r", "o", "y", "g", "c", "b", "p"],
   ["r", "o", "y", "g", "c", "b", "p"],
   ["r", "o", "y", "g", "c", "b", "p"],
   ["r", "o", "y", "g", "c", "b", "p"],
   ["r", "o", "y", "g", "c", "b", "p"],
   ["r", "o", "y", "g", "c", "b", "p"],
 ]