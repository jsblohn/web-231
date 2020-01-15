/*
============================================
; Title: Assignment 6.1
; Author: Mike Goldberg
; Date: 01/14/2020
; Modified By: Janet Blohn
; Description: Discussion Board: Find the errors in the code below
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Discussion 6.1"));
// start program

/*
    expected output:
    Moe - Black Hair
    Larry - Red Hair
    Curly - No Hair
*/

// variable declaration
var stooges = [
  { name: "Moe", hair: "Black" },
  { name: "Larry", hair: "Red" },
  { name: "Curly", hair: "No" },
]

// output
stooges.forEach(stooge => {
  console.log(stooge.name + " - " + stooge.hair + " Hair");  // Added plus sign after ".name"
});  // Also added "stooge."" before "hair"
//  end program
