//My Code.

// let a = parseInt(prompt("Enter adjective number"));
// let b = parseInt(prompt("Enter shopname number "));
// let c = parseInt(prompt("Enter another word number"));

// let Adjectives = {
//     0:"Crazy",
//     1:"Amazing",
//     2:"Fire",
// }

// let ShopName = {
//     0:"Engine",
//     1:"Foods",
//     2:"Garments",
// }

// let AnotherWord = {
//     0:"Bros",
//     1:"Limited",
//     2:"Hub",
// }

// if(0<=a<3 , 0<=b<3 , 0<=c<3){
//     let adj = Adjectives[a];
//     let shop = ShopName[b];
//     let word = AnotherWord[c];

//     let BusinessName = "@"+adj+shop+word+a+b+c;
//     console.log(`Your Business Name is ${BusinessName}`);
// }

// else{
//     console.log("Invalid BusinessName");
// }

//Harry's Code:- 

let rand = Math.random()
let first, second, third;
// 0 0.33 0.66 1
// Lets generate the first word
if(rand<0.33){
    first = "Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}
// Lets generate the second word
rand = Math.random()
if(rand<0.33){
    second = "Engine"
}
else if(rand<0.66 && rand>=0.33){
    second = "Foods"
}
else{
    second = "Garments"
}
// Lets generate the third word
rand = Math.random()
if(rand<0.33){
    third = "Bros"
}
else if(rand<0.66 && rand>=0.33){
    third = "Limited"
}
else{
    third = "Hub"
}
console.log(`${first} ${second} ${third}`)