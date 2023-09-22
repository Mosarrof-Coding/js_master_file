let num10 = 2;
let num11 = 3;
let num12 = 19;

// 1. finding max number between two numbers--------
console.log("1. Max number- between the two:", Math.max(num10, num11));

// 2. finding max number among three numbers--------
console.log("2. Max number- among there three:", Math.max(num10, num11, num12));
// 3. finding a number state: positive, negative or zero;
{
    let number = 0;
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

// 4. a number devisible by 10 or not
{
    let number = 20;
    if (number % 10 === 0){
        console.log("4. The number is devisiable");
    } else if(number % 10 !== 0){
        console.log("4. The number is not devisiable");
    }
}

// 5. even or odd number
{
    let number = 16;
    if (number % 2 === 0){
        console.log("5. The number is even");
    } else if(number % 2 !== 0){
        console.log("5. The number is odd");
    }
}

// 6. whether a character is in the alphabet or not.
{
    function isAlphabetCharacter(char) {
        // Convert the character to its Unicode code point
        const charCode = char.charCodeAt(0);
      
        // Check if the character code falls within the range of alphabet characters
        // Uppercase letters: A (65) to Z (90)
        // Lowercase letters: a (97) to z (122)
        return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
    }
      
    // Example usage:
    const character = 'y';
    if (isAlphabetCharacter(character)) {
        console.log(`6. ${character} is the alphabet.`);
    } else {
        console.log(`6. ${character} is a number.`);
    }
}

// 7. the temperature is hot, cold or normal. 
{
    // 30 >=  is hot, 25 <= is cold , any other value is normal.
    let temperature = 43;
    if (temperature >= 30) {
        console.log("7. the temperature is hot");
    } else if(temperature <= 25){
        console.log("7. the temperature is cold");
    }
    else{
        console.log("7. the temperature is normal");
    }
}

// 8. Finding out if the average grade: math, physics and english.
{
    let mathMarks = 78;
    let englishMarks = 94;
    let physicsMarks = 89;
    let averageMarks = (mathMarks + englishMarks + physicsMarks) / 3;
    
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
    }else if(averageMarks < 40){
        console.log('8. "Grade F"');
    }
}

// 9. the random number between 1 to 10
let randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("9. Roll a dice:", randomNumber);

// 10. looping even number  between 10 to 50.
for (let cNumber = 10; cNumber <= 50; cNumber++) {
    if (cNumber % 2 === 0) {
        console.log("10. even number: ", cNumber);
    }
}






