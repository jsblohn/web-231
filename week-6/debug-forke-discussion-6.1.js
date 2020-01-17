/*
=========================================================
; Title:  Exercise 6.1
; Author: Nicole Forke
; Date:   15 January 2020
; Modified By: NA
; Description: Objects and Built-In Objects
;========================================================
*/

//statement that displays personal header
const header = require('../blohn-header');
console.log(header.display("Janet", "Blohn", "Discussion 6.1"));

/*
  Expected Output:

  Secondary colors:
  Purple
  Orange
  Green
*/

// start program

//declare variable string to access the object property
var second = "";

//create object and define key/value pairs
var colors = {
  redBlue: "Purple",
  redYellow: "Orange",
  yellowBlue: "Green",
};

//use for...in loop to call the value of object properties
  for(color in colors) {
    //colors += colors[second] + " ";  // Left original here intentionally to show changes made.
    second += colors[color] + "\n";  // Changed to add the color value as a string
    // to the variable called "second".  Changed the color value of "second" to "color"
    // in order to copy the values to "second".  Also added the new line indicator
    // to log each one on a separate line.
  };

//create new line
console.log(" ");

// output
console.log("Secondary colors: \n" + second);  // Removed the plus sign between between
// "Secondary" and colors (personal preference).  Also made the "c" in colors small in
// order to match the output example, plus added the new line indicator in order
// to output the first color on a separate line.


//end program
