// function double_Trouble(numbers_arr) {
//     double_T = []
//     for (const num of numbers_arr) {
//         double_N = num + num;
//         double_T.push(double_N);
//         if (num in double_T){
//             double_T.pop(num);
//         }
//     }
//     console.log(double_T)
// }

// numbers_arr = [1, 2, 2, 3, 3, 4, 5]
// double_Trouble(numbers_arr);


let arr = [1,3,5,8,8,7,5];
let newArr = [];
for(let i =0 ; i<arr.length ; i++){
    if(arr[i]!== arr[i-1]){
        newArr.push(arr[i]);
    }
}
let doubleArr = newArr.map((val)=> {
    return val*2;
})
console.log(doubleArr);