// function to reverse string in javascript
//input:good expected:doog
function reverseString(str) {
    // return  str.split('').reverse().join('');

    // let reverseString="";
    // for(let c of str)
    //     reverseString=c+reverseString;
    // return  reverseString;

    // let reverseString="";
    // str.split('').forEach(char =>reverseString = char+
    // reverseString);
    // return  reverseString;

    return str.split('').reduce((reverseString, char) =>
        char + reverseString, '');
}


//function to reverse integer in javascript
//input:Repaper expected:Repaper and is a planidrome
function reverseInt(number) {
    const revstring = number.toString().split('').reverse().join('');

    return parseInt(revstring) * Math.sign(number);

}

//function to check if string is palindrom using JS
//input:12345 expected:54321
//input-12345 expected:-54321
function isPlaindrome(str) {
    //convert to lower as reduce will convert all char to lowercase and give the output
    let strNew = str.toLowerCase();
    let newString = strNew.split('').reduce((reverseString, char) =>
        char + reverseString, '');
    if (strNew == newString)
        console.log(`The string ${str} is a plaindrom`);
    else
        console.log(`The string ${str} is not a plaindrom`);
}

//function to reverse integer in javascript
//input:i love my shoe expected:I Love My Shoe
function CapitalizeLetters(str) {
    //use regular expression to include multiple char seperation like space,?,: etc
    let strArray = str.toLowerCase().split(/[' ',':']/);
    //is regular experssion has parentheses the method will include matched results ib the array
    //let strArray = str.toLowerCase().split(/([' ',':'])/);

    //If only space has to be considered 
    //let strArray = str.toLowerCase().split(' ');

    let reverseString = "";
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].substring(0, 1).toUpperCase() +
            strArray[i].substring(1);
    }
    //return strArray.join(' ');

    //using higher order map 
    return str
        .toLowerCase()
        .split(/[' ',':']/)
        .map(word => word[0].toUpperCase() + word.substr(1)
        ).join(' ');
}

//function to reverse integer in javascript
//input:i love my shoe expected:I Love My Shoe
function CapitalizeLettersUsingMap(str) {
    //using higher order map 
    return str
        .toLowerCase()
        .split(/[' ',':']/)
        .map(word => word[0].toUpperCase() + word.substr(1)
        ).join(' ');
}
const output = reverseString("good");
console.log(`The reverse string is ${output}`);

isPlaindrome("Repaper");


const reverseNumber = reverseInt(12345);
console.log(`The reverse number is ${reverseNumber}`);

const reverseNegativeNumber = reverseInt(-12345);
console.log(`The reverse negative number is ${reverseNegativeNumber}`);

const cap = CapitalizeLetters("i love my:shoe");
console.log(`The capitalized string is ${cap}`);


const capMap = CapitalizeLettersUsingMap("i love my:shoe");
console.log(`The capitalized string using map is ${capMap}`);
