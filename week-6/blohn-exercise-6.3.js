/*
============================================
; Title:  blohn-exercise-6.3.js
; Author: Professor Krasso
; Date:   15 January 2020
; Modified By: Janet Blohn
; Description: Exercise 6.3 Object Literals
; Create an object literal and display each field in a single string.
*/

"use strict";

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 6.3"));

// Create the object literal.
var ticket = {
  id: 300,
  name: 'Customer Service',
  requestor: 'John Smith',
}

// Format the fields for output by creating a string with all properties and values.
var output = '';
var i = 0;
var count = Object.keys(ticket).length;

for (var property in ticket) {
  i++;

  if (i < count) {
    output += property + ': ' + ticket[property] + ", ";
  }
  else {
   output += property + ': ' + ticket[property];
  }
}

// Print the results.
console.log("{" + output + "}");
