let x = Math.random();
let a = prompt("Enter first number");
let o = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

if ( x < 0.1 ){
    o = obj[o];
    console.log(`The result is ${a} ${o} ${b}`);
    alert(`The result is ${eval(`${a} ${o} ${b}`)}`);
}
else{
    console.log(`The result is ${a} ${o} ${b}`);
    alert(`The result is ${eval(`${a} ${o} ${b}`)}`); //eval() evaluates JS code represented as a string and returns its completion value...
}