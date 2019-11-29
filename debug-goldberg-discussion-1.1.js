/*============================================;

Title: Assignment 1.1;
Author: Mike Goldberg; Date: 11/26/2019;
Modified By: Janet Blohn;
Description: This snippet contains errors for ; to be audited by other students;

===========================================*/

/* 

Expected Output
Mike's current mood

*/


// variable declarations

var firstName = "Mike";

var timeOfDay = 16; // was ===
// also tested this way for second message: var timeOfDay = 16;

var canDrinkAlcohol = timeOfDay >= 17;  //Assuming 5 p.m. changed to 24 hour clock time

// Removed quotation marks from around canDrinkAlcohol.  It's not a string, but a variable
var result = canDrinkAlcohol ? `${firstName} is in a good mood!` : `${firstName} is so crabby`;

// output

console.log(result);

/*============================================;

Title: Assignment 1.1;
Author: Mike Goldberg; Date: 11/26/2019;
Modified By: Janet Blohn;
Description: This snippet contains errors for ; to be audited by other students;

===========================================*/

/*

Expected Output
Mike's current mood

*/


// variable declarations

var firstName = "Mike";

var timeOfDay = 23; // was === changed to single =
// also tested this way for second message: var timeOfDay = 16;

var canDrinkAlcohol = timeOfDay >= 17;  //Assuming 5 p.m. changed to 24 hour clock time

// Removed quotation marks from around canDrinkAlcohol.  It's not a string, but a variable
var result = canDrinkAlcohol ? `${firstName} is in a good mood!` : `${firstName} is so crabby`;

// output

console.log(result);