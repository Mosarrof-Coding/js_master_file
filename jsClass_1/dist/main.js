// ======= class1===========

// //Task 1: Hello World with Variables
var helloWorld = "Hello World"; //string

var fullName = "Md Mosarrof Hosain";
var age = 35;  //number
var phoneNum = "01643492556"; //string (issue ?)
var dist = "Kurigram";
var country = "Bangladesh";

var greeting = "Hello";
var name = "Md Mosarrof Hosain";
var profile = greeting + " " + name;
console.log(profile);

// //Task 2: Basic Math Operations
var num1 = 2;   // numder
var num2 = 3;

var addision = num1 + num2;
var subtract = num1 - num2;
var multiply = num1 * num2;
var division = num1 / num2;
var modulus = num2 % num1;
var exponentiation = num1 ** num2;

console.log("addision:", addision);
console.log("subtraction:", subtract);
console.log("multiplication:", multiply);
console.log("division:", division);
console.log("modulus:", modulus);
console.log("exponentiation:", exponentiation);

var num3; //undefined
var num4 = null;
var num5 = "4";
console.log("num with string: " + num1 + num5); //num concated with string
console.log("string with num: " + num5 + num1); //string concated with num
num1++ //increment
num1++
num1-- //decrement
console.log(num1 == num2); // boolean
console.log(num1 - num2 == -1); // boolean
console.log(num2 - num1 === 1); // boolean
console.log(num2 - num1 !== 1); // boolean
console.log("At last i assumed that string is used only descriptive stetment and number is mathamatical operation.");

// ============ class2 ===================
let Uname, agee, designation;
Uname = "Mosarrof";
agee = 36;
agee = 76;
designation = "react develpoer";
console.log(`${Uname} is ${agee} years old. he is a ${designation}`);
console.log(`javascript variables: var and let can be re assign their value & predefined/decler variables and leter assign their indivisual value but can't const.`);
{
    let agee = 49;
    console.log("local: " + agee + " years")
}
console.log("global: " + agee + " years");
const number = 60;
console.log(number);

// condition---------
let cureentIndex = 20;
if (cureentIndex == 30) {
    console.log("cureentIndex is thirtee");
}else{
    console.log("currentIndex is nat 30")
}

// is it equal or greter then 90 = experianced;
// is it greter or equal 40 = sohpomore;
// is it less then 40 = fresher;

let it = 40;
if( it >= 90){
    console.log("it is experianced");
}else if(it > 40){
    console.log("it is sophomre");
}
else{
    console.log("fresher")
}

