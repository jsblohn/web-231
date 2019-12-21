/*
============================================
; Title:  blohn-assignment-4.4.js
; Author: Professor Krasso
; Date:   20 December 2019
; Modified By: Janet Blohn
; Description: Exercise 4.4 - Predicates
; Create a function called getState and
; use JavaScript's filter function.
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Assignment 4.4"));

// Variable - Create an array of 5 states
var states = ["Nebraska", "Iowa", "California", "Florida", "Colorado"];

// getState function using an if statement
function getState(state, choice) {
  if (state === choice) {
    return choice;
  }
}

// output the entire array
console.log("-- ORIGINAL ARRAY --");
for (var i = 0; i < states.length; i++) {
  console.log(states[i]);
}

// sort the array
console.log("\n-- SORTED ARRAY --");
states.sort();
for (var i = 0; i < states.length; i++) {
  console.log(states[i]);
}

// select a state from the array
console.log("\n -- Selected value -- ");
var choice = states.filter(function(state)
  {return getState(state, "Iowa")
})
console.log(choice[0]);
