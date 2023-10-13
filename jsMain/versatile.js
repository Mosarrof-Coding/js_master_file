// ====== task-1 -> reverse a String ==========
{
  // using for loop:
  function reversString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  let originString = "Hi Xuvi im Ok";
  let revResult = reversString(originString);
  console.log("Reverse String for loop:", revResult);

  // Using a for...of:
  function reversString(str) {
    let reversed = "";
    for (let char of str) {
      reversed = char + reversed;
    }
    return reversed;
  }
  let originString3 = "Hi Xuvi im";
  let revResult3 = reversString(originString3);
  console.log("Reverse String by for of loop:", revResult3);

  //Using the split, reverse, and join methods:
  function reversString(str2) {
    return str2.split("").reverse().join("");
  }
  let originString2 = "Hi Xuvi im";
  let revResult2 = reversString(originString2);
  console.log("Reverse String three built-In func:", revResult2);
}

// ======= Task:2 Count vowels ===============
{
  function countVowels(vowels) {
    let count = 0;
    for (let i = 0; i < vowels.length; i++) {
      // Check if the character is a vowel
      if (
        vowels[i] === "a" ||
        vowels[i] === "e" ||
        vowels[i] === "i" ||
        vowels[i] === "o" ||
        vowels[i] === "u"
      ) {
        count++;
      }
    }
    return count;
  }
  let originSentance = "Hi Xuvi im";
  let countResult = countVowels(originSentance);
  console.log("count vowels:", countResult);

  // countsVowels by includes()
  function vowels2(vowel) {
    let count = 0;
    let caseSen = vowel.toLowercase();
    for (let i = 0; i < caseSen.length; i++) {
      let vowelsArr = ["a", "e", "i", "o", "u"];
      // if dont take vowelsArr then use = "aeiou" of loop cond
      if (vowelsArr.includes(caseSen[i])) {
        count++;
      }
    }
    return count;
  }
  let originSentance2 = "Hi Xuvi im";
  let countV = countVowels(originSentance2);
  console.log("count vowels:", countV);
}

// ==== Task 3: Capitalize First Letter of Each Word ====
function capF_letter(str) {
  let ooo = str.split(" ");
  let toUppCse = ooo.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  return toUppCse.join(" ");
}
let capString = "go ahed of developing web and designer";
let capF_letters = capF_letter(capString);
console.log(capF_letters);

// Using String.prototype.replace() method:
const originalString =
  "This is a sample string with some occurrences of 'sample'.";
const searchString = "sample";
const replacementString = "example";
const modifiedString = originalString.replace(searchString, replacementString);
console.log(modifiedString);

// Task 4: remove duplicate items from an array
{
  // using new Set();
  let Array = [1, 2, 3, 1, 2, 2, 34, 34, 40];
  let NewArray = [...new Set(Array)];
  console.log("using new Set():", NewArray);

  // using for of()
  let NewArr = [];
  for (const itm of Array) {
    if (!NewArr.includes(itm)) {
      NewArr.push(itm);
    }
  }
  console.log("Using for of():", NewArr);

  //using for loop();
  let newArr2 = [];
  Array.map((item) => {
    if (!newArr2.includes(item)) {
      newArr2.push(item);
    }
  });
  console.log("using map():", newArr2);

  // using for each()
  let newArr3 = [];
  Array.forEach((element) => {
    if (!newArr3.includes(element)) {
      newArr3.push(element);
    }
  });
  console.log("Using forEach():", newArr3);

  // using reduce()
  let reduceArr = Array.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  console.log("using reduce():", reduceArr.reverse());
}
