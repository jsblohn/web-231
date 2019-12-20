/*
============================================
; Title:  blohn-exercise-4.2.js
; Author: Professor Krasso
; Date:   19 December 2019
; Modified By: Janet Blohn
; Description: Exercise 4.2 - Arrays
; Array program with 5 fruit items, a function
; that will iterate through the array and output
; the results, and a call to the getFruit function
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 4.2"));

// Variable - Create an array
var fruits = ["Banana", "Cherry", "Peach", "Orange", "Grape"];

// getFruit function
function getFruit(arr) {
  for (var i=0; i < arr.length; i++) {
  console.log(arr[i]);
  }
}

//Call the getFruit function
getFruit(fruits);
