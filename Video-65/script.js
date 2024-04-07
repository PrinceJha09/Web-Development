let a = parseInt(prompt("Enter a number"));
// let arr = [];
// for (let i = 1; i <=a ; i++){
//     arr.push(i);
// }

// let factorial = arr.reduce((prev,curr)=>{
//     return prev*curr;
// });

// console.log(factorial);

// Harry's Code:-
function factorial (number){
    let arr = Array.from(Array(number+1).keys());
    let newArr = arr.slice(1);
    let c = newArr.reduce((a,b) => {
        return a*b;
    });
    console.log(c);
}

factorial(a);