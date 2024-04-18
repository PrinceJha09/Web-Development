// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function Sum(arr){
    let newArr =[];
    for(let i =0; i<arr.length ;i++){
        if(arr[i]<0){
            newArr = arr.slice(0,i);
            break;
        }
    }
    let sum = newArr.reduce((prev,curr)=> {
        return prev+curr;
    })
    console.log(sum);

};

let a=[3,5,-9,-2,6]
Sum(a);