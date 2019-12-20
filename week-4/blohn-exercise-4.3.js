/*
============================================
; Title:  blohn-exercise-4.3.js
; Author: Professor Krasso
; Date:   19 December 2019
; Modified By: Janet Blohn
; Description: Exercise 4.3 - Filtering
; Use conditionals to determine the equality
; of an array value.
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 4.3"));

// Variable - Create an array
var vehicles = ["Accord", "Camry", "Maxima", "Ranger", "Blazer"];

// getValue function
function getValue(arr, model) {
  for (var i=0; i < arr.length; i++) {
    if(model === arr[i])
      console.log(model);
  }
}

// Output
console.log("-- DISPLAYING ARRAY ITEMS --");
for (var i =0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}

// Blank line
console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicles, "Ranger");

// Blank line
console.log("");

console.log("-- SELECTED VALUE --");
getValue(vehicles, "Camry");
