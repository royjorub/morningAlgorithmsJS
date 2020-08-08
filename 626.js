
// reverse array , swap array

function reverse(arr){
    var temp = 0;
    var num = num [0];
    for (var i = 0; i < arr.length/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp
        
    }
    return arr;
}

var myArray = [1,2,3,4,5];
console.log(reverse(myArray));

//return new array with reversed version of first string array


function reverseStr(str){
    var newArray=[];
    var newStr
    for (var i = str.length -1;i >= 0; i--){
        newArray.push(str[i]);
    }
    newStr = newArray.join('') //turns array into str
    return newStr
}

var string = 'cat';
console.log(reverseStr(string));

