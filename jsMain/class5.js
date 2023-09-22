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

// class-6
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

// Array.from() -> creats an array from iterable strings.
let name = "ceguevara";
let newArr = Array.from(name);
console.log("Array.from:", newArr);

// find() 
let score = [23, 34, 45, 56];
let desired = score.find(x => x > 34);
console.log("find(desired):", desired);

// sort();
let sortedNumber = score.sort((a, b)=> a-b);
console.log(sortedNumber); //ascendingly
console.log(sortedNumber.reverse()); //descendingly

// critical/advanched -> sort();
let people = [
    {name : "bogus", age : 28},
    {name : "diaping", age : 24},
    {name : "lottus", age : 18},
    {name : "trifle", age : 34},
    {name : "rhina", age : 29}
];
people.sort((a, b) => a.age - b.age);
console.log(people);

// modern javascript array iteration
// forEach();
var snacks = ["cheeps", "Cookies", "Chocolate", "bourgious"];
snacks.forEach(snack => console.log(`Snack: ${snack}`));

// map();
snacks.map((snack=> console.log(`snack: ${snack}`)));

// from set
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log("roots:", roots);

// filter();
let filterized = numbers.filter(x => x % 2 !== 0);
console.log("even/odd:", filterized);

// find(); return math.
let finder = numbers.find(x => x > 1);
console.log("firstOne:", finder);

// some(); retuen boolean.
let some = numbers.some(x => x % 2 === 0);
console.log("some:", some);

// every(); return boolean.
let every = numbers.every(x => x > 0);
console.log("every:", every);

// reduce() return math.
let reduce = numbers.reduce((acc, value)=> acc + value, 0);
console.log("reduce:", reduce);

// for...of  how much/many value in an array or others that showes it.
for (const value of numbers) {
    console.log("forOf:", value);
}
    