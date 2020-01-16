/*
============================================
; Title:  blohn-exercise-6.2.js
; Author: Professor Krasso
; Date:   15 January 2020
; Modified By: Janet Blohn
; Description: Exercise 6.2 Exception Handling
; Throw an error. Using a try, catch, and finally block, catch and display the error.
*/

"use strict";

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 6.2"));

var num = 60;
var chr = "test";
function testNum(tst) {
  try {
      if(isNaN(tst)) throw " is not a number. The value of num must be numeric.";
      console.log(tst + " is a number.");
  } catch (err) {  // Catch it if it's not and give an error message.
      console.log('Catch clause: "' + tst + '"' + err);   //Put the non-numeric value in parentheses.
  } finally {  // Notify it's the end of the run.
      console.log("Finally clause: Goodbye!");
}}

testNum(num);
console.log("");
testNum(chr);
