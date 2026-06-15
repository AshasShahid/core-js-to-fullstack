
// 1. Declaring variables using different keywords
const accountId = 144232;     // Cannot be changed (Constant)
let accountEmail = "ashas@google.com"; // Block-scoped, changeable
var accountPassword = "12345";  // Older way, avoid using due to scope issues
accountCity = "Faisalabad";    // Possible, but bad practice (always use let/const)

let accountState; // Declared but not initialized -> will print 'undefined'

// 2. Modifying values (where allowed)
accountEmail = "ashas@hc.com";
accountPassword = "password123";
accountCity = "Lahore";

// accountId = 2 // TRAP: Un-commenting this line will throw an error because it's a const!
console.log(accountCity)
// 3. Printing everything beautifully in a table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);