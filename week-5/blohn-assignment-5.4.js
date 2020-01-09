/*
============================================
; Title:  blohn-assignment-5.4.js
; Author: Professor Krasso
; Date:   08 January 2020
; Modified By: Janet Blohn
; Description: Exercise 5.4 - Filtering/Reducing Complex Data Structures
; Array program with 5 composer objects, a filtered array of composers by rating,
; a filtered array of composers by genre, and a forEach
; function to iterate through each array and output the results.
; the results.
;          **** Reference ****
; "List of Famous Composers", https://www.famouscomposers.net/list
;===========================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 5.4"));

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

// Create a Map from the above collection containing only the composers' names and Ratings
var byRating = composers.map(function(composer) {
  return {
    lastName: composer.lastName,
    rating: composer.rating
  };
});

// Create a Map from the above collection containing only the composers' names and genre
var byGenre = composers.map(function(composer) {
  return {
    lastName: composer.lastName,
    genre: composer.genre
  };
});

// Write out each composer by rating
console.log("-- COMPOSER BY RATING --");

byRating.forEach(function(rated) {
  console.log("Rating: " + rated.rating);
  console.log("Composer: " + rated.lastName + "\n");
})

// Write out each composer by rating
console.log("-- COMPOSER BY GENRE --");

byGenre.forEach(function(genres) {
  console.log("Genre: " + genres.genre);
  console.log("Composer: " + genres.lastName + "\n");
})
