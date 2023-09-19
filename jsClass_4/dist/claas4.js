// fewer builtIn function/method: concat(), delete(), remove(), subString(), slice(), charAt(iteration all of datatype & find their indivisual index-number), toUpperCase(), toLowerCase(), includes(boolean), indexOf(index);

let userName = "dollitle";
let sentence = "i love Bangladesh potentially by my inheritance";

//concate(); concatenation something with it's by string;
let concat = userName.concat(" is a good boy");
console.log("concat():", concat);

// take a portion of a string = subString(argument two number = start, end).
let substring = sentence.substring(5, 13);
console.log("substring():", substring);

// take a portion of a string = slice(argument-> two number = start, end. this are positive also may negative).
let slice = sentence.slice(-14, -2);
console.log("slice():", slice);

let blogpost = 
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam deleniti totam fugiat doloremque, dicta itaque quas architecto error facere consequuntur at cupiditate ratione quae quasi provident hic excepturi ex natus."
let sliceing = blogpost.slice(0, 85) + " ....";
console.log("slice():", sliceing);

//charAt()-> search a letter of a word/big-number from all datatype.
let word = "coffee";
let thisLetter = word.charAt(2);
console.log("charAt():", thisLetter);

let newsentence = "hello blob, how is your Birthday party was held?";
// uper/lower-case();
let newsentenceTolowerCase = newsentence.toLocaleLowerCase();
let newsentenceToupperCase = newsentence.toUpperCase();

// indexOf(); passes indivisual word to find their index; return:index.
let searcIndex = newsentence.indexOf("Birthday");
console.log("indexOf():", searcIndex);

// includes(); passes indivisual word to find existence or not form given sentence; return:boolean.
let existance = newsentence.includes("Birthday");
console.log("includes():",existance);

// problem-1;
// find if the word "birthday" is present in the newSentence?
let givenSentencs = "hello blob, how is your Birthday party was held?";
let givenSentencsToLowercase = givenSentencs.toLowerCase();

let searWord = "birtHday";
let searWordToLowercase = searWord.toLowerCase();

if(givenSentencsToLowercase.includes(searWordToLowercase)){
    console.log("includes(conditions):", searWord, "is exist");
}else{
    console.log("oops,", searWord, "is not exist");
}