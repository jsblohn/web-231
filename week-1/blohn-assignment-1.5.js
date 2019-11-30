/*
============================================
; Title: Assignment 1.1
; Author: Janet Blohn   
; Date: 29 November 2019
; Modified By: N/A
; Description: Assignment 1.5 - Type, Values and Variables
;===========================================
*/

//Create the variables
var firstName1 = "Penny";
var firstName2 = "Mavis";
var firstName3 = "Avery";
var lastName1 = "Cairn";
var lastName2 = "Black";
var lastName3 = "Mix";
var address1 = "123 Dodge Street";
var address2 = "409 Fort Street";
var address3 = "902 Q Street";
var payRate1 = 1000.30;
var payRate2 = 2500.56;
var payRate3 = 3325.45;
var hireDate1 = new Date(1978, 01, 20);
var hireDate2 = new Date(2007, 05, 10);
var hireDate3 = new Date(2017, 3, 21);
 
// Format payRate to 1 decimal place
var formattedPayRate1 = payRate1.toFixed(1);
var formattedPayRate2 = payRate2.toFixed(1);
var formattedPayRate3 = payRate3.toFixed(1);

// Format slashes in hireDate
var formattedHireDate1 = hireDate1.toLocaleDateString();
var formattedHireDate2 = hireDate2.toLocaleDateString();
var formattedHireDate3 = hireDate3.toLocaleDateString();

// Write the results to the console
console.log(firstName1 + " " + lastName1 + " " + address1 + " " + formattedHireDate1 + " $" + formattedPayRate1);
console.log(firstName2 + " " + lastName2 + " " + address2 + " " + formattedHireDate2 + " $" + formattedPayRate2);
console.log(firstName3 + " " + lastName3 + " " + address3 + " " + formattedHireDate3 + " $" + formattedPayRate3);
