/*
============================================
; Title:  blohn-assignment-3.4.js
; Author: Professor Krasso
; Date:   12 December 2019
; Modified By: Janet Blohn
; Description: Assignment 3.4 - Utilizing pattern matching functions
; Wrap a for loop around functions that handle matching and non-matching variables
; Generate test variables
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Assignment 3.4"));

/*Create six local test variables with default values.
Using if...else statements call the match function and pass-in two of the test variables.  In the body of the "true" statement call the logMatch function and pass-in these same two variables.  In the body of the "false" statement call the logMismatch function and pass-in these same two variables.  Repeat this process until all 6 variables have been tested.*/

var test1 = 8;

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

 /**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Function to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}

 // For loop to create 10 random numbers and compare them against first variable assigned
 for (var i = 0; i < 10; i++)
 {var random = randomNumber( );
  if (test1 === random)
    logMatch(test1, random);
  else
    logMismatch(test1, random);
 }
