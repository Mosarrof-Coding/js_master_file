// for loop: continous by function
function forLoop(countStart, countEnd){
    for (let counter = countStart; counter <= countEnd; counter++) {
        console.log("forLoop:", counter);
    }
}
// invoke/calls
forLoop(89, 90);
forLoop(79, 80);

// profile generator
function profile(name, age, maritul_status){
    console.log(`profile: User name is ${name} age ${age} and ${maritul_status}`);//template literale
}
profile("Jamal", 37, "unmarried.");
profile("Kamal, is a ligachy person:", 22, "married.");

// random number between 1 to 10
function randomNumber(){
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log("Roll a dice:", randomNumber);
}
randomNumber();
randomNumber();

// return -> basically return executes the codes rather not called yet. if called it, showing the result.
function add(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2;
}
let rslt = add(20, 30);
console.log("return:", rslt);

// object......
let person = {
    name : "doddle",
    age : 34,
    country : "bangladesh",
    salary : 34000,
    teaching : function (){
        console.log("institue: asian university");
    },
    gratuity : function (month, quantity){
        return month * quantity;
    }
}
console.log("country:", person.country);
person.teaching();
let totals = person.gratuity(720, 3000);
console.log("gratuity:", totals);

// Arrays
let data = ["mango", 34, "berry", false, 20000, undefined, "tomato", null, BigInt];
console.log("Arrays:",data);
data.push("wheel");
console.log("push:", data);
data.pop();
console.log("pop:",data);
data.shift();
console.log("shift:",data);
let unshifts = data.unshift("google", "safari");
console.log("unshift:", unshifts);
let slice = data.slice(2, 6);
console.log("slice:",slice);
let slicenegative = data.slice(-3);
console.log("sliceNegative:",slicenegative);
let splice = data.splice(3, 1, "pimk", "chocolete");
console.log("splice:", splice);