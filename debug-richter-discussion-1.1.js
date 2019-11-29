/*
===========================================
; Title: Assignment 1.1
; Author: Emily Richter
; Date: 29 November 2019
; Modified By: Janet Blohn
; Description: Create a simple program with
; at least two errors. The function should
; solve for the area of a square.
;==========================================
*/

// Define variable x

var x = 2; // was var x  added = 2; (added everything after var x on this line) 
result = square();  //added this to keep what the function named square returns

function square()  /* chg'd from  square(x) */ {
    var x = 4; // will also work if added here only & this variable x will override global
    var answer = x * x;  //chg'd from return x*x;
    return answer;  // added this to return variable answer from function to (result)
}

console.log(result);  // was consale.log(square(2)); chg'd a to o in console, and (square(2)) to result 
// => 4  // this does return 4 when the global variable of x is used, 16 when using local variable in function
// NOTE:  This will run successfully by only correcting the spelling of console
