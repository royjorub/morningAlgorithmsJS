// Recursion & Call Stack

// Function calls and returns self
// Base Case
// Forward Movement

const pancakes = (input) => {
    console.log(input)
    console.log(`
      ┊┊┊┊╱▔▔▔▔▔▔╲┊┊┊┊
      ┊╱▔╱┈╭╮┈┈╭╮┈╲▔╲┊
      ╱╱▕┈┈┏━━━━┓┈┈▏╲╲
      ▏▏▕╲┈╰━━━━╯┈╱▏▕▕
      ▏▏┈╲╲▂▂▂▂▂▂╱╱┈▕▕
      ╲╲┈┈╲▂▂▂▂▂▂╱┈┈╱╱
    `)
    if (input <= 0) return 0
    return pancakes(input - 1)
  }
  
  pancakes(10)
  
  /* ******************************************************************************** */
  
  /*
    Recursive Sigma
  
    Input: integer
    Output: sum of integers from 1 to Input integer
  
  */


  const num1 = 5
  const expected1 = 15
  // Explanation: (1+2+3+4+5)
  
  const num2 = 2.5
  const expected2 = 3
  // Explanation: (1+2)
  
  const num3 = -1
  const expected3 = 0
  

  const pancakes = (input) => {
    console.log(input)
    console.log(`
      ┊┊┊┊╱▔▔▔▔▔▔╲┊┊┊┊
      ┊╱▔╱┈╭╮┈┈╭╮┈╲▔╲┊
      ╱╱▕┈┈┏━━━━┓┈┈▏╲╲
      ▏▏▕╲┈╰━━━━╯┈╱▏▕▕
      ▏▏┈╲╲▂▂▂▂▂▂╱╱┈▕▕
      ╲╲┈┈╲▂▂▂▂▂▂╱┈┈╱╱
    `)
}


var recursiveSigma = (num) => {
    num = Math.floor(num);
    if (num <= 0){
        return 0;
    }
        
    else if (num == 1){ 
        return 1;
    }
    else {
        return num + recursiveSigma(num - 1)};

}

recursiveSigma(5)

  /* ******************************************************************************** */
  
  /*
    Recursively sum an arr of ints
  */
  
  const nums4 = [1, 2, 3]
  const expected4 = 6
  
  // add params if needed for recursion
  function sumArr(nums) {
    // algorithm here
  }