// The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function validator(password) {
    let hasDigit = /[0-9]/.test(password);
    let hasUpper = /[A-Z]/.test(password);
    let hasLower = /[a-z]/.test(password);
    return password.length >= 8 && hasDigit && hasLower && hasUpper;
}  

console.log(validator("PR0CEk"));