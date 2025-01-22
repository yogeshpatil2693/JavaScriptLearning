const accountId = 144553
let accountEmail =  "yogesh@google.com"
var accountPass = "12345"
accountCity = "Jaipur"
let accountState; // default value is undefined
// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPass = "212121"
accountCity = "Mumbai"

console.log(accountEmail);

/*
Prefer not to use Var because issue in block scope and function scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])

