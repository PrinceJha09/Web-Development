let a = parseInt(prompt("Enter adjective number"));
let b = parseInt(prompt("Enter shopname number "));
let c = parseInt(prompt("Enter another word number"));

let Adjectives = {
    0:"Crazy",
    1:"Amazing",
    2:"Fire",
}

let ShopName = {
    0:"Engine",
    1:"Foods",
    2:"Garments",
}

let AnotherWord = {
    0:"Bros",
    1:"Limited",
    2:"Hub",
}

if(0<=a<3 , 0<=b<3 , 0<=c<3){
    let adj = Adjectives[a];
    let shop = ShopName[b];
    let word = AnotherWord[c];

    let BusinessName = "@"+adj+shop+word+a+b+c;
    console.log(`Your Business Name is ${BusinessName}`);
}

else{
    console.log("Invalid BusinessName");
}
