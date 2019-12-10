/*
============================================
; Title:  blohn-discussion-3.1.js
; Author: Janet Blohn
; Date:   09 December 2019
; Modified By: N/A
; Description: Discussion Board 3.1 - Control Statements
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Define variables
var test = 5;  // This should print to the console
var message = "";

// Write a message based off the value of the variable named test
if (test == 1) {
  message = "Test was equal to 1";
}
else if (test != 3) {
  message = "3 was entered as test";
}
else (test == 5) {
  message = message + test;
}
else if {
  message = "The answer is not found";
}

// Print the Header and print the message under it
console.log(header.display("Janet", "Blohn", "Discussion 3.1"));
console.log (message);
