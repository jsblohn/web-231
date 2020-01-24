/*
============================================
; Title:  blohn-exercise-7.2.js
; Author: Professor Krasso
; Date:   23 January 2020
; Modified By: Janet Blohn
; Description: Exercise 7.2 Constructor Functions
; Create a constructor objects, add five objects to it and output the results.
*/

"use strict";

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 7.2"));

function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;

}

var employees = [
  new Employee(100, "Don", "Jones", "Software Engineer"),
  new Employee(220, "Joe", "Smith", "Scrum Master"),
  new Employee(340, "Jane", "Doe", "Technical Support Specialist"),
  new Employee(460, "Stella", "Brown", "Business Analyst"),
  new Employee(580, "Brenda", "White", "QA Analyst")
];

employees.forEach(function(person) {
  console.log(person.id, person.firstName, person.lastName, person.title);
});
