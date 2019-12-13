/*
============================================
; Title:  blohn-exercise-3.2.js
; Author: Professor Krasso
; Date:   12 December 2019
; Modified By: Janet Blohn
; Description: Exercise 3.2 - Utilizing pattern matching functions
; Set up functions to handle matching and non-matching variables
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 3.2"));

/*Create six local test variables with default values.
Using if...else statements call the match function and pass-in two of the test variables.  In the body of the "true" statement call the logMatch function and pass-in these same two variables.  In the body of the "false" statement call the logMismatch function and pass-in these same two variables.  Repeat this process until all 6 variables have been tested.*/

var test1 = "Cat";
var test2 = "Dog";
var test3 = "Fish";
var test4 = "Fish";
var test5 = 5;
var test6 = 6;

// Compare 2 parameters & return true if they match, false if they don't
function match(firstValue, secondValue) {
  if (firstValue === secondValue)
    return true;
  else
    return false;
}

// Send a string message saying two parameters don't match
function logMismatch(firstValue, secondValue) {
  console.log(firstValue + " does NOT match " + secondValue + "!");
}

// Send a string message saying two parameters match
function logMatch(firstValue, secondValue) {
  console.log(firstValue + " matches " + secondValue);
 }

 // Two variables to test the match function
console.log("Results from two variable testing the match function")
console.log(match("House", "Boat"));
console.log(match(60, 60));

// Using if...else statements call the match function and pass-in two of the six test variables at a time.
console.log("\nIf/else statements comparing 2 variables at a time");
if (match(test1, test2)) {
 logMatch(test1, test2);
}
else {
 logMismatch(test1, test2);
}

if (match(test3, test4)) {
  logMatch(test3, test4);
}
else {
  logMismatch(test3, test4);
}

 if (match(test5, test6)) {
  logMatch(test5, test6);
}
else {
  logMismatch(test5, test6);
}
