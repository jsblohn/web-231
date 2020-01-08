/*
============================================
; Title:  Exercise 5.1
; Author: James Brown
; Date:   1/8/2020
; Modified By: Janet Blohn
; Description: A simple program that calls a function to iterate over a new Map() object.
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Discussion 5.1"));

// Welcome message
console.log('\n--Welcome to Exercise 5.1 --');

//variable declaration
var foodTypes;

//keyed collection defining
foodTypes = new Map();  // Added new before Map

//set key value pairs in the map
foodTypes.set(`Bar`, `A Rueben`);
foodTypes.set(`Italian`, `Pasta`);
foodTypes.set(`Chinese`, `Lo Mein`);
foodTypes.set(`Mexican`, `A Tostada`);

/**
 * Params: none
 * Response: console logs key value pairs in map
 * Description: console logs key value pairs in map
 */
function loopKeys(){
for (var [key, value] of foodTypes) {
  console.log(value + ' is considered ' + key + ` food`);
}
};

//output
loopKeys();  // Added parentheses after function name

//end program
