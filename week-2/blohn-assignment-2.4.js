/*
============================================
; Title:  blohn-assignment-2.4.js
; Author: Professor Krasso
; Date:   05 December 2019
; Modified By: Janet Blohn
; Description: Displays output from several functions
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// #1 Create a full name string by concatenating two variables
function fullName(firstName, lastName) {
  var firstName = "Janet";
  var lastName = "Blohn";
  return firstName + " " + lastName;
 }

// #2 Format a date
function dateWriter(year, month, day) {
  var dateIn = new Date(2018, 11, 22);  // Tell Date the parameters to use
  var today = dateIn.toDateString();  // Convert to string
  return today;
}

// #3 Format a number to have fixed decimal position
function formatNumber(number, numberOfFixedPositions) {
  var number = 5020.45678;            // Can be any number
  var numberOfFixedPositions = 2;     // Number of numbers after decimal point
  return number.toFixed(numberOfFixedPositions);
}

//  #4 Convert a string of numbers to an integer
function convertToInt(string) {
  string = "10 little indians";    // Any string that contains numbers
  return parseInt(string);         // Find the number and convert it to an integer
}

// #5 Convert the first characters to a number from a string
function convertToFloat(string) {
  string = "3.2 miles";           // Numeric string can't have letters in front of it
  return parseFloat(string);      // Return a floating point number
}

// Write the header
console.log(header.display("Janet", "Blohn", "Assignment 2.4"));
// Write the results from above functions
console.log("Hello my name is " + fullName());
console.log("Today's date is " + dateWriter());
console.log("A formatted number: " + formatNumber());
console.log("A string converted to an Integer: " + convertToInt());
console.log("A string converted to a Float: " + convertToFloat());
