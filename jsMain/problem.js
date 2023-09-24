// Problem 1: Reverse a String
// revers a string -> string.split("").reverse().join("");
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("lorem ipsum dolor"));

// Problem 2: Check Palindrome
function checkPalindrome(string) {
    // find the length of a string
    const len = string.length;
    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
// call the function
const value = checkPalindrome("reviver"); 
// malylam, pop, madam, civic, radar, level, rotor, kayak, refer, redivider, deified and reviver.
console.log(value);

// Problem 3: Count Vowels
function countVowels(str){
    let Cnumber = str.match(/[aeiou]/gi).length;
    return Cnumber;
}
let countV = countVowels("i love bangladesh as well as me");
console.log(countV);

// split(""); it creats an alphabatically array.if spaces in the string sign than creats array word by word.
let givenSentance = "hi Xuvi im ok";
let segmentsAlpha = givenSentance.split("");
let segments = givenSentance.split(" ");
console.log(segmentsAlpha);
console.log(segments);

// Problem 4: Capitalize First Letter of Each Word
function capitalizedWords(str){
    let words = str.split(" ");
    // Capitalize the first letter of each word and join them back together
    let CPword = words.map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    // Join the capitalized words to form the final sentence
    let capitalizedSentence = CPword.join(' ');
    return capitalizedSentence;
}
let capitalize = capitalizedWords("hi xuvi, i am ok");
console.log(capitalize);

// rest word by slice()
let swv = "sk mkd cndk skdjd dkskd kdkd fksjaod vsoasmfnv dksood";
let ddd = swv.split(" ");
let dddd = ddd.map(rr=>{
    return rr.slice(4);
});
console.log(dddd);

// Problem 5: Find Longest Word
function findLongestWord(bigWord){
    let Words = bigWord.split(" ");
    // console.log(portionalWords);
    let longestWord = '';
    let longestLength = 0;
    for (const word of Words) {
        const wordLength = word.length;
        if (wordLength > longestLength) {
            longestWord = word;
            longestLength = wordLength;
        }
    }
    return longestWord;
    // console.log(longestWord);
}
let bigWord = "javascript can find the longest word of a paragraph or a sentance firstly using the split method of the paragraph or sentance and they were divided into wordize & makes a array by their later if uses the length of this word that count thair longibity";
let lword = findLongestWord(bigWord);
console.log(lword);

// Problem 6: Extract Domain from Email Address
function extractDomainFromEmail(email) {
    // Regular expression to match the domain part of an email address
    const domainRegex = /@(.+)/;
    const match = email.match(domainRegex);
  
    if (match) {
      return match[1];
    } else {
      return null; // Return null if no domain is found
    }
  }
  
  // Example usage:
  const email = "example_truedo56765@example.com";
  const domain = extractDomainFromEmail(email);
  console.log(domain); // This will print "example.com"