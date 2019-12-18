/*
============================================
; Title:  blohn-discussion-4.1.js
; Author: Janet Blohn
; Date:   18 December 2019
; Modified By: N/A
; Description: Discussion 4.1 - Arrays
; Array program with at least two errors that won't execute
; Writing function names and what the arrays should look like
; to the console for ease of determining program flow to the console.
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Discussion 4.1"));

// Create variables
var pets = ["Cat", "Dog", "Bird", "Fish", "Snake"];
var petsCopy1 = [];
var petsCopy2 = [];

//  This function lists all of the elements in the pet array.
//  It also creates a copy of the original array with any additions added.
function listAll(pet, index, pets) {
  if(index === 0) {  //Only do the first 2 console writes once for each call.
    // Write the function name and expected results to the console.
    console.log("** listAll Output **");
    console.log("NOTE - pets and petsCopy1 should be equal both times through this function, and petCopy2 should have ZERO pets here.");
  }
  console.log(pet + " is indexed as " + index);
  if (index === pets.length - 1) {
    console.log("There are " + pets.length + " pets in the Array called pets.");
    petsCopy1 = pets.slice;    // Keep a copy of pet array including additions to it.
    console.log("There are " + petsCopy1.length + " pets in the Array called petsCopy1.");
    console.log("There are " + petsCopy2.length + " pets in the Array called petsCopy2.\n");
  }
}

// This function should show 1 deleted from the array named "pets".
function listDeleted(pet, index, petsCopy1) {
  if(index === 0) {  // Only do the first 2 console writes once.
  // Write the function name and expected results to the console.
  console.log("** Output from listDeleted **");
  console.log("NOTE - petCopy1 should still have the same number of pets (7), pets should have 1 less (6) number of pets due to deletion of one animal, and petCopy2 should still have ZERO pets here.");
  }
  if(index === petsCopy1.length - 1) {
    console.log("There are " + pets.length + " pets in the Array called pets.");
    console.log("There are " + petsCopy1.length + " pets in the Array called petsCopy1.");
    console.log("There are " + petsCopy2.length + " pets in the Array called petsCopy2.");
    console.log("** End of forEach methods **\n");
  }
}

pets.forEach(listAll);
pets.push("Pig","Horse");
pets.forEach(listAll);
pets.splice(4,1);
petsCopy1.forEach(listDeleted);

console.log("** Add to an array without using the forEach method **");
// Write to the console how the arrays look before before adding to petsCopy2
console.log("Array pets has these " + pets.length + " items:");
for (var i = 0; i < pets.length; i++)
console.log(pets[i]);
console.log("\nArray petsCopy2 has these " + petsCopy2.length + " items:");
if(petsCopy2.length > 0) {
console.log(petsCopy2[i]);
}
petsCopy2 = pets.concat("Lizard","Ferret");  // Add pets to petsCopy2 array only
console.log("\n** Final results of arrays.  Pets should still be 6, petCopy1 should be 7, and petCopy2 should be 8. **");
console.log("Array pets still has these " + pets.length() + " items:");
for (var i = 0; i < pets.length; i++)
console.log(pets[i]);
console.log("\nArray petsCopy1 still has these " + petsCopy1.length + " items:");
for (var j = 0; j < petsCopy1.length; j++)
console.log(petsCopy1[j]);
console.log("\nArray petsCopy2 has these " + petsCopy2.length + " items:");
for(var k = 0; k < petsCopy2.length; k++)
console.log(petsCopy2[k]);
