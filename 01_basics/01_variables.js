const accountId = 12345;
let accountEmail = "Bilal@gmail.com";
var accountPassword = "1234567";
accountCity = "Peshawar";

// accountId = 2;

/*
Prefer not to use var variable
because of issue in block scope and functional scope ( scope means this {})
*/

accountEmail = "Muhammad@gamil.com";
accountPassword = "123";
accountCity = "Mardan";

console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountCity]);