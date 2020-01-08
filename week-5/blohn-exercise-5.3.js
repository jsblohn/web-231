/*
============================================
; Title:  blohn-exercise-5.3.js
; Author: Professor Krasso
; Date:   08 January 2020
; Modified By: Janet Blohn
; Description: Exercise 5.3 - Object Collections
; Array program with 5 composer objects, and a forEach
; function to iterate through it and output
; the results.
;          **** Reference ****
; "List of Famous Composers", https://www.famouscomposers.net/list
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 5.3"));

// website used: https://www.famouscomposers.net/list
// Title: List of Famous Composers

// Variable - Create an array of five composer objects
var composers = [
  {
    firstName: "Johann",
    lastName: "Bach",
    genre: "Classical",
    rating: 9
  },
  {
    firstName: "Henry",
    lastName: "Mancini",
    genre: "Easy Listening",
    rating: 8
  },
  {
    firstName: "Hoagy",
    lastName: "Carmichael",
    genre: "Jazz",
    rating: 6
  },
  {
    firstName: "John",
    lastName: "Tesh",
    genre: "New Age",
    rating: 3
  },
  {
    firstName: "William",
    lastName: "Handy",
    genre: "Blues",
    rating: 10
  }
]
// Create Title Line
console.log("** Composers **");
// forEach Function
composers.forEach(function(composer) {
  console.log("First Name: " + composer.firstName + ", Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating);
})
