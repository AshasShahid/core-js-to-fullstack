let score = '33';
let score2 = '33abc'; // string can contain other characters
let score3 = null;

// console.log(typeof score);
// console.log(typeof(score));

let ValueInNumber = Number(score);
// console.log(typeof(ValueInNumber));

let ValueInNumber2 = Number(score2);
// console.log(typeof(ValueInNumber2));
// console.log(ValueInNumber2); // will return NaN not a number 

let ValueInNumber3 = Number(score3);
// console.log(typeof(ValueInNumber3));
// console.log(ValueInNumber3); // it will return zero

// the same way undefined will return NaN and boolean value true will return 1 and 0 for false
// some more conversions 
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// if we try an empty string "" it will return false 
// if we use any string "Ashas" it will return true
let someNumber = 27;
let stringNumber = String(someNumber);
// console.log(stringNumber); // it will return a string 27
// console.log(typeof(stringNumber)); 

// *************Operations******************
let value = 27;
let negValue = -value;
// console.log(negValue);
// console.log(2 + 3);
// console.log(2 - 3);
// console.log( 4 / 2);
// console.log(2 * 2);
// console.log(2 ** 2);
// console.log(2 % 2);

let str1 = "Hello";
let str2 = " Ashas";
console.log(str1 + str2) // string concatination
console.log("1" + 2); 
console.log(1 + "2");
console.log("1" + 2 + 2); // return 122 string value
console.log(1 + 2 + "2"); // returns 32 string value 
let gameCounter = 100;
console.log(gameCounter++); // will return 100 and than after usage value is incremented
let Counter = 100;
console.log(++Counter); // will return 101 