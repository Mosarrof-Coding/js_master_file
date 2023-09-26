let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let outputh2 = document.getElementById("outputh2");

btn1.addEventListener("click", ()=>{
    let total = parseInt(input1.value) + parseInt(input2.value);
    outputh2.innerText = total;
})
btn2.addEventListener("click", ()=>{
    let total = parseInt(input1.value) - parseInt(input2.value);
    outputh2.innerText = total;
})
btn3.addEventListener("click", ()=>{
    let total = parseInt(input1.value) / parseInt(input2.value);
    outputh2.innerText = total;
})
btn4.addEventListener("click", ()=>{
    let total = parseInt(input1.value) * parseInt(input2.value);
    outputh2.innerText = total;
})
btn5.addEventListener("click", ()=>{
    let total = parseInt(input1.value) ** parseInt(input2.value);
    outputh2.innerText = total;
})