/*
============================================
; Title:  blohn-exercise-2.3.js
; Author: Professor Krasso
; Date:   05 December 2019
; Modified By: Janet Blohn
; Description: Displays output from function(myName)
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Create function properties for myName function
myName.janet = "Hello Janet Blohn!";

// Create a function called myName
function myName() {
  return myName.janet;
}

// Write the header and the return from myName.janet
console.log(header.display("Janet", "Blohn", "Exercise 2.3"));
console.log('\n' + myName());
