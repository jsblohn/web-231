/*
============================================
; Title:  control-statements-if-else.js
; Author: Professor Krasso
; Date:   12 December 2019
; Modified By: Janet Blohn
; Description: Displays a string message if the choice variable equals C
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 3.3"));

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

let eventKeyCode = 13

// Changed if...else statements to switch statements
switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.')
    break;
  case 16:
    console.log('The shift key was pressed.')
    break;
  case 32:
    console.log('The spacebar key was pressed.')
    break;
  case 8:
    console.log('The backspace / delete key was pressed.')
    break;
  default:
    console.log('Unrecognized key.')
    break;
}
