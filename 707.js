# /*
Parens Valid
Given an str that has parenthesis in it
    return whether the parenthesis are valid
*/

function parensValidStack(str) {
    var counter_p = 0;

    for (var i = 0; i < str.length; i++){
        if (str[i]=='(') {
            counter_p ++;
            //console.log(str[i])
        } else if (str[i]==')') {
            counter_p--;
        }
        if (counter_p < 0) { // More right parentheses than left
            return false;
        }
    }
    // AFTER parsing the string....
    if (counter_p == 0) { // Equal number of left and right parentheses
        return true;
    } else { // More left than right
        return false;
    }
}

var test1 = "Y(3(p)p(3)r)s"
parensValidStack(test1)
// Output: true

var test2 = "N(0(p)3"
parensValidStack(test2)
 // Output: false - not every parenthesis is closed.

var test3 = "N(0)t ) 0(k"
parensValidStack(test3)
 // Output: false - because the underlined ")" is premature: there is nothing open for it to close.

var test4 = "a(b))(c"
parensValidStack(test4)
/*
Output: false
    - same number of opens and closes but the 2nd closing closes nothing
 */

 // ************************************************

/*
Braces Valid

Given a string sequence of parentheses, braces and brackets, determine whether it is valid.
 */

function bracesValid(str) {
   // code here

   // Make an empty array, then push (, { or [ as we go along, and then pop
   // make sure the correct character is matched up
   // test 1: empty - true
   // test 3: [(] - false
    
    var brackets = [];
    for (var i = 0; i < str.length; i++)
    {
         // For pushing characters
        if (str[i] === "(")
        {
            brackets.push(")");
        }
        if (str[i] === "[")
        {
            brackets.push("]");
        }
        if (str[i] === "{")
        {
            brackets.push("}");
        }
        // For popping characters
        if (str[i]===")") {
            if
        }
    }
    
    
}

var test1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"
bracesValid(test1)
 // Output: true

var test2 = "D(i{a}l[ t]o)n{e"
bracesValid(test2)
// Output: false

var test3 = "A(1)s[O (n]0{t) 0}k"
bracesValid(test3)
// Output: false