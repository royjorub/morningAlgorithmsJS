/*
  Flood Fill

  Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent.

  Input:
  [
    [3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0],
    [7, 3, 3, 5, 3],
    [6, 5, 3, 4, 1],
    [1, 2, 3, 3, 3]
  ]

  and startXY of [2,2], and newColor of 1.

  we examine the cells that are directly (not diagonally) adjacent to startXY. If any have a value of 3 (the original value at startXY), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .

  Output:
  [
    [3, 2, 1, 4, 3],
    [2, 1, 1, 4, 0],
    [7, 1, 1, 5, 3],
    [6, 5, 1, 4, 1],
    [1, 2, 1, 1, 1 ]
]
*/

var map =
[
    [3, 2, 3, 4, 3],
    [2, 3, 3, 4, 0],
    [7, 3, 3, 5, 3],
    [6, 5, 3, 4, 1],
    [1, 2, 3, 3, 3]
]

function floodFill(map, coord, newColor){
    var yCoord = coord[0];
    var xCoord = coord[1];
    var oldColor = map[yCoord][xCoord]; // Get old color for comparing to adjacent cells
    console.log("Original color at (",yCoord,", ",xCoord,") = ",oldColor)
    map[yCoord][xCoord] = newColor; // This is the new color being stored in that position
    console.log("New color at (",yCoord,", ",xCoord,") = ",map[yCoord][xCoord])
    // Check left
    if (xCoord >= 1 && oldColor == map[yCoord][xCoord-1]) {
        console.log("Color to the left is the same")
        floodFill(map,[yCoord,xCoord-1],newColor);
    }
    // possible return false
    // Check right
    if (xCoord <= map[yCoord].length - 2 && oldColor == map[yCoord][xCoord+1]) {
      console.log("Color to the right is the same")
      floodFill(map,[yCoord,xCoord+1],newColor);
    }
    // Check above
    if (yCoord >= 1  && oldColor == map[yCoord-1][xCoord]) {
      console.log("Color above is the same")
      floodFill(map,[yCoord-1,xCoord],newColor);
    }
    // Check below
    if (yCoord <= map[xCoord].length - 2 && oldColor == map[yCoord+1][xCoord]) {
      console.log("Color below is the same")
      floodFill(map,[yCoord+1,xCoord],newColor);
    }
}

var test1 = [2,2]
console.log(floodFill(map,test1,1))

