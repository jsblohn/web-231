/*
============================================
; Title:  blohn-exercise-5.2.js
; Author: Professor Krasso
; Date:   08 January 2020
; Modified By: Janet Blohn
; Description: Exercise 5.2 - ES5 Built-In Functions
; Array program with 5 food types, and a forEach
; function to iterate through it and output
; the results.
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 5.2"));

// Variable - Create an array
var foods = ["Pizza", "Manicotti", "Eggs", "Hamburgers", "Burritos"];

// forEach Function
foods.forEach(function(food) {
  console.log(food);
})
