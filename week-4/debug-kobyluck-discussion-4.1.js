/*
  	===================================================
  	; Title: Discussion 4.1
    ; Author: Johnny Kobyluck
    ; Date: 19 December 2019
  	; Modified By: Janet Blohn
    ; Description: Arrays
    ;==================================================
  	*/

  	//statement that displays personal header
  	const header = require('../blohn-header.js');
  	console.log(header.display("Janet", "Blohn", "Discussion 4.1"));

// start program

/*
  Expected Output:
  Johnny Kobyluck
  Discussion 4.1
  Today's Date
  The primary colors backwards are purple,blue,green,yellow,orange,red.
*/

// declaring the "colors" array.
var colors = ["red", "black", "yellow", "green", ""];

// inserting "orange" in place of "black" in my "colors" array.
//colors.slice(1, "orange");
// my change
for (var i = 0; i < colors.length; i++) {
  //colors[i] = colors[i].replace('black', 'orange');  //Note: This will also replace the color.
  if(colors[i] === "black")
  colors[i] = "orange";
}

// adding 2 more colors to the "colors" array.
colors.push("blue", "purple");

// flipping the "colors" array in reverse order.
colors.reverse();  //added ()

// displaying my "Expected Output".
console.log("The rainbow backwards is " + colors +".");

// end program
