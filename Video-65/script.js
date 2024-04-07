let a = parseInt(prompt("Enter a number"));
let arr = [];
for (let i = 1; i <=a ; i++){
    arr.push(i);
}

let factorial = arr.reduce((prev,curr)=>{
    return prev*curr;
});

console.log(factorial);