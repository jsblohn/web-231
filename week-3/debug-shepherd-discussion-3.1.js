/*
============================================
; Title:  shepherd-assignment3.1.js
; Author: Jeff Shepherd
; Date:   9 December 2019
; Modified By: Janet Blohn
; Description: Write control code that will
; not run and has at least 2 errors for
; others to debug.
; Expected output: "The grade is A."
;===========================================
*/

/**
 * Params: Number grade between 0-100
 * Response: "A", "B", "C", "D", or "F"
 * Description: Returns an alphabetic grade symbol
 */
function getAlphaGrade(grade) {
  let alphaGrade;
  if (grade >= 90) {
    alphaGrade = "A";
  } else if (grade >= 80) {  // changed from else to else if
    alphaGrade = "B";
  } else if (grade >= 70) {
    alphaGrade = "C";
  } else if (grade >= 60) {
    alphaGrade = "D";
  } else {
    alphaGrade = "F";
  }
  return alphaGrade;
}

result = "The grade is " + getAlphaGrade(99) + ".";  // moved quote from behind grade to behind a space after is
console.log(result);
