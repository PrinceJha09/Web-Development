// My Code 

// document.querySelectorAll(".box").forEach((element) => {
//     let x = Math.random()*255;
//     let y = Math.random()*255;
//     let z = Math.random()*255;
//     element.style.backgroundColor = `rgb(${x} , ${y}, ${z})`;
//     let a = Math.random()*255;
//     let b = Math.random()*255;
//     let c = Math.random()*255;
//     element.style.color = `rgb(${a} , ${b}, ${c})`;
// })

// Harry's Code: 
function getRandomColor() {
    let x = Math.ceil(0 + Math.random()*255);
    let y = Math.ceil(0 + Math.random()*255);
    let z = Math.ceil(0 + Math.random()*255);
    return `rgb(${x} , ${y}, ${z})`;
}
document.querySelectorAll(".box").forEach((element) => {
    element.style.backgroundColor = getRandomColor();
    element.style.color = getRandomColor();
})