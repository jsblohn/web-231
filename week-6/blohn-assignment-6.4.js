/*
============================================
; Title:  blohn-assignment-6.3.js
; Author: Professor Krasso
; Date:   15 January 2020
; Modified By: Janet Blohn
; Description: Assignment 6.4 Nested Object Literals
; Create an object literal ticket with a nested object literal person.
*/

"use strict";

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Exercise 6.3"));

// Create the object literal.
var ticket = {
  id: 220,
  name: "Customer Service",
  dateCreated: "January 15, 2020",
  priority: 3,
  person: {
    id: 500,
    firstName: "Sue",
    lastName: "Doe",
    jobTitle: "Software Developer"
  }
}

// Print the results.
console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket.person.firstName + " " + ticket.person.lastName + " (" + ticket.person.jobTitle + ").");
