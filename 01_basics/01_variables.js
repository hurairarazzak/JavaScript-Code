const accountId = 144552
let accountEmail = "hurairarazzak@google.com"
var accountPassword = "12345"
accountCity = "Karachi"
let accountState;

// accountId = "125" // not allowed

accountEmail = "hr@hr.com"
accountPassword = "21212121"
accountCity = "Lahore"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])