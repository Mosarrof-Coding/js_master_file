// functions..........for loop continous by function
function forLoop(countStart, countEnd){
    for (let counter = countStart; counter <= countEnd; counter++) {
        console.log("forLoop:", counter);
    }
}
// invoke/calls
forLoop(89, 90);
forLoop(79, 80);

// userName generator

function userName(){
    console.log("user is Jamal");
}
userName();

// random number between 1 to 10
function randomNumber(){
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    console.log("Roll a dice:", randomNumber);
}
randomNumber();
randomNumber();

// return -> basically return executes the function rather not called yet. if call it showes the result.
function add(num1, num2){
    // console.log(num1 + num2);
    return num1 + num2;
}
let rslt = add(20, 30);
console.log(rslt);