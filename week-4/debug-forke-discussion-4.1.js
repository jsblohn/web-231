/*
  	===================================================
  	; Title: Exercise 4.1
  	; Author: Nicole Forke
  	; Date: 18 December 2019
  	; Modified By: Janet Blohn
  	; Description: Show the array length and their sum.
  	;==================================================
  	*/

  	/*Expected Output:
  	// The sum of the elements in the Array which should be 80.
  	// The length of the Array which should be 3.
  	*/

  	//statement that displays personal header
  	const header = require('../blohn-header.js');
  	console.log(header.display("Janet", "Blohn", "Discussion 4.1"));

  	// start program

  	// variables:
  	var a = [10, 20, 50, 5];

     // I couldn't think of a reasonable explanation to hard code the length, so in order to change it, I just dropped the last element.
     a.length = a.length - 1;

    // function using the reduce() method to get the sum:

     // Changed areduce to a.reduce in order to point array a at the reduce method.

    var sum = a.reduce(function(x, y) { return x + y });
  	//output showing the array length (3) and the sum of the arrays (80):

    // Changed alength to a.length which denotes the length of a.
    // Also removed ticks after a.length and added space before arrays.  A plus sign could have also been added after a.length in order to execute.  Also changed "There are" to "There are " and removed ticks and one plus sign before a.length, and added spaces to remaining text to create spaces between words.
    console.log( "There are " + a.length  + " arrays" + " and" + " here is the sum of the arrays " + sum + ".");

  	// end program
