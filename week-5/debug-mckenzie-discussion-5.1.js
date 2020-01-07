/*
============================================
; Title: keyed collection array.js
; Author: Diandra McKenzie
; Date: 7 January 2020
; Modified By: Janet Blohn
; Description: Keyed collection array with at least two (2) errors
;===========================================
*/

/*
Expected output:
Janet Blohn  changed use my header info
Discussion 5.1
Today's Date

Kirk is 43 years old
Diandra is 40 years old
Antonio is 3 years old
Amya is almost 2 years old
*/

//Start Program

// Import statement, Header
const header = require('../blohn-header.js');

//Output of header
console.log(header.display("Janet", "Blohn", "Discussion 5.1"));

// new line    commented this new line out - already done in header routine
//console.log("\n")

//Variables
var family = new Map();

family.set('Kirk', 43);
family.set('Diandra', 40);
family.set('Antonio', 3);
family.set('Amya', 'almost 2');  //added comma after Amya, chg'd [] to ()

//Output

for (var [name, age] of family) //loop to return an array  changed map name from person to family
{
  console.log(name + ' is ' + age + ' years old');
}
//End Program
