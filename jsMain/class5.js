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
    console.log(`profile: User name is ${name} age ${age} and ${maritul_status}`);
}
profile("Jamal", 37, "unmarried.");

// random number between 1 to 10
function randomNumber(){
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log("Roll a dice:", randomNumber);
}
randomNumber();
randomNumber();

// return -> basically return executes the codes rather not called yet. if call it showes the result.
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
let datum = ["mango", undefined, 34, "berry", false, 20000, "tomato", null, BigInt];
console.log(datum);
datum.push("wheel");
console.log(datum);
datum.shift();
console.log(datum);
datum.pop();
console.log(datum);