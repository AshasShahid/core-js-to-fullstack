// 1. Basic predictable comparisons (Same data type)
// console.log(2 > 1);  // true
// console.log(2 >= 1); // true
// console.log(2 < 1);  // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true


// 2. Comparing different data types (JS automatically converts types)
// console.log("2" > 1);  // true  (JS converts "2" to number 2)
// console.log("02" > 1); // true


// 3. The confusing world of 'null' comparisons 
// Avoid these types of comparisons in production code, but critical for interviews!
console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true  

/* 
  Why does null >= 0 output true?
  The reason is that an equality check (==) and comparisons (>, <, >=, <=) work differently.
  Comparisons convert null to a number, treating it as 0. 
  Therefore:
  null >= 0 becomes 0 >= 0 which is true.
  null > 0 becomes 0 > 0 which is false.
*/


// 4. Undefined comparisons (Always false)
console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false


// 5. Strict Check (===) vs Loose Check (==)
// ==  only checks the value (performs type conversion if needed)
// === checks the value AND the data type strictly (no conversion)

console.log("2" == 2);   // true  (because "2" is converted to number 2)
console.log("2" === 2);  // false (because data types are different: string vs number)