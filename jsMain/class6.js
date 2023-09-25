console.log("== previous assignment was same question till 9num. so, it used functional way to solve their for upgrade ==");
// 1. Max between two numbers.
function maxNumberTwo(a, b){
    if(a > b){
        console.log("1. maxNum between two: a");
    }else{
        console.log("1. maxNum between two: b");
    };
}
// invoks/calls
maxNumberTwo(10, 20);

// 2. Max among three numbers.
function maxNumberThree(x, y, z){
    if(x > y){
        console.log("2. maxNum among three: x");
    }else if(y > z){
        console.log("2. maxNum among three: y");
    }else{
        console.log("2. maxNum among three: z");
    };
}
// invoks/calls
maxNumberThree(10, 40, 30);

// 3. finding a number state: positive, negative or zero;
function numState(number){
    if (number >= 0){
        if(number == 0){
            console.log("3. The number is zero")
        }else{
            console.log("3. The number is positive");
        }
    }else{
        console.log("3. The number is negative");
    }
}
// invoks
numState(4);

// 4. a number devisible by 10 or not
function divise(number){
    if (number % 10 === 0){
        console.log(`4. ${number} is devisiable 10`);
    } else{
        console.log(`4. ${number} is not devisiable 10`);
    }
}
// invocs
divise(20);

// 5. even or odd number
function evenOdd(number){
    if (number % 2 === 0){
        console.log("5. The number is even");
    } else if(number % 2 !== 0){
        console.log("5. The number is odd");
    }
}
// invocs
let enod = 23;
evenOdd(enod);

// 6. whether a character is in the alphabet or not.
function isAlphabetCharacter(char) {
    const charCode = char.charCodeAt(0);
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}
const character = 'k';
if (isAlphabetCharacter(character)) {
    console.log(`6. ${character} is an alphabet.`);
} else {
    console.log(`6. ${character} is a number.`);
}

// 7. 30 >= is hot, 25 <= is cold , any other value is normal.
let temperature = 44;
if (temperature >= 30) {
    console.log("7. weather is hot");
} else if(temperature <= 25){
    console.log("7. weather is cold");
}
else{
    console.log("7. weather is normal");
}

// 8. Finding out if the average grade: math, physics and english.
function grading(averageMarks){
    if (averageMarks >= 90) {
        console.log('8. "Grade A"');
    } else if(averageMarks >= 80){
        console.log('8. "Grade B"');
    }else if(averageMarks >= 70){
        console.log('8. "Grade C"');
    }else if(averageMarks >= 60){
        console.log('8. "Grade D"');
    }else if(averageMarks >= 40){
        console.log('8. "Grade E"');
    }else{
        console.log('8. "Grade F"');
    }
}
// invoks
let mathMarks = 98;
let englishMarks = 94;
let physicsMarks = 89;
let totalMarks = mathMarks + englishMarks + physicsMarks;
console.log("8. totalMarks:", totalMarks)
let averageMarks = (mathMarks + englishMarks + physicsMarks) / 3;
let result = grading(averageMarks);

// 9. the random number between 1 to 10
function randomDice(x){
    return Math.floor(Math.random() * x + 1);
}
// invoks
let randomize = randomDice(10);
console.log("9. Roll a dice:", randomize);

// 3 meaningful arrays and  3 objects
// arrays
let fruits = ["banana", "mango", "pinaple", "tomato"];
console.log("10: Arr_fruits:", fruits);
let dataType = ["tomato", false, 34, undefined, "box", BigInt, null];
console.log("10: Arr_dataType:", dataType);
let Arr_path = [];
console.log("10: Arr_path:", Arr_path);
// object 
let person = {
    name: "mosarrof",
    age : 35,
    designation : "frontEnd larner"
}
console.log(person);
let cars = {
    name: "bmw",
    color : "pink",
    weight : "x ton"
}
console.log(cars);
let food = {
    name: "milk",
    type : "malnutrition",
}
console.log(food);

// 11. a while loop which prints values from 10 to 50
let toNum = 10;
while (toNum <= 50) {
    console.log("while loop:", toNum);
    toNum+= 8;
}

// 12. a for loop which prints values from 20 to 60
for (let number =20; number <= 60; number+= 8) {
    console.log("for loop:", number);
}

// 13. a function of adding two numbers. 
function add(a, b){
    return a + b ;
};
let addN = add(10, 20);
console.log("13. twoNumbersAddision:", addN);

// 14. function which returns a for loop which initial value to 50;
function forLoop(countStart, countEnd){
    for (let counter = countStart; counter <= countEnd; counter++) {
        console.log("forLoop:", counter);
    }
}
// invoke/calls
forLoop(89, 90);
forLoop(79, 80);

// 15. Create a function which return whether the year is leap year or not
function isLeapYear(year){
    if((year % 4 === 0) && (year % 100 !== 0) || (year % 400 == 0)){
        console.log(`15. ${year} is a leap year`);
    }else{
        console.log(`15. ${year} is not a leap year`);
    }
}
isLeapYear(2028);

// 7. the temperature is hot, cold or normal.30 >= is hot, 25 <= is cold , any other value is normal.
function weather(temperature){
    if (temperature >= 30) {
        return ("16. weather is hot!");
    } else if(temperature <= 25){
        return ("16. weather is cold!");
    }
    else{
        return ("16. weather is normal.");
    }
}
// invoks
let weather2 = weather(22);
console.log(weather2);

// 17. a function which returns whether the number is odd or even
function evenOdd(number){
    if (number % 2 === 0){
        return ("17. The number is even");
    } else if(number % 2 !== 0){
        return ("17. The number is odd");
    }
}
// invocs
let enod2 = evenOdd(123);
console.log(enod2);

// 18. Splice -> remove two items and adding two new elements 
let myArr = ["one", "two", "three", "four", "five", "six", "seven"];
console.log(myArr);
let splices = myArr.splice(2, 2, "new", "new2");
console.log("removed:", splices);
console.log(myArr);

// 19. Reversing and sorting an array where arr = [2,45,4,55,12,42,34,78];
let arr = [2,45,4,55,12,42,34,78];
let ascending = arr.sort((a, b)=> a - b);
console.log("19. ascending:", ascending);
console.log("19. descending:", ascending.reverse());

//20. Creating an object with two methods;
let car = {
    brand: "Volvo",
    color: "purple",
    price: 2400 + "$",
    speed: 0,
    run: function (onVol) {
        this.speed += onVol;
        console.log(`20. run to ${this.speed} mph`);
    },
    brake: function (brakVol) {
        this.speed -= brakVol;
        console.log(`20. Braked to ${this.speed} mph`);
    }
};
console.log(car);
car.run(20);
car.brake(10);

// 21. Reverse an given string. Where, - let text = “I love coding” - after reverse a string output will be - ‘gnidoc evol i’;
function reversString(text){
    return text.split("").reverse().join("");
};
let text = reversString("i love coding");
console.log("21. reversed:", text);

// 22. Create an array with list of items. Iterate the array to view the list of the items in the console using for loop. 
let items = ["Apple", "Banana", "Cherry", null, 34, BigInt];
// Iterate through the array using a for loop
for (let i = 0; i < items.length; i++) {
  console.log((i + 1), items[i]);
}