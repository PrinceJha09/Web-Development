document.body.style.backgroundColor = "green";
document.body.style.color = "white";

function randomTime(){
    let x = Math.ceil((1000 + Math.random()*6000));
    return x;
}

let t = setInterval(()=> {
    let last = document.body.lastElementChild;
    if(last.innerHTML.endsWith("...")){
        last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
    }
    else{
        last.innerHTML = last.innerHTML + ".";
    }
},200);

async function text(abc){
    return new Promise((resolve,reject)=> {
        setTimeout(()=> {
            let h1 = document.createElement("h1");
            h1.innerText = abc;
            document.body.append(h1);
            resolve ("success");
        }, randomTime() );
    })
    
}
(async function Hacking(){
    await text("Initializing Hacking...");
    await text("Reading Your Files...");
    await text("Password files detected...");
    await text("Sending all passwords and personal files to server...");
    await text("Cleaning up...");
    clearInterval(t);
})();

//Harry's Code

// const addItem = async (item) => {
//     await randomDelay();
//     let div = document.createElement("div");
//     div.innerHTML = item;
//     document.body.append(div)
// }

// const randomDelay = () => {
//     return new Promise((resolve, reject) => {
//         timeout = 1 + 6 * Math.random();
//         setTimeout(() => {
//             resolve()
//         }, timeout * 1000);
//     })
// }

// async function main() {


//     let t = setInterval(() => {
//         let last = document.body.getElementsByTagName("div");
//         last = last[last.length - 1]
//         if(last.innerHTML.endsWith("...")){
//             last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
//         }
//         else{

//             last.innerHTML = last.innerHTML + "."
//         }

//     }, 100);


//     let text = ["Initialized Hacking now reading your data",
//         "Reading your Files",
//         "Password files Detected",
//         "Sending all passwords and personal files to server",
//         "Cleaning up"]

//     for (const item of text) {
//         await addItem(item)
//     }

//     await randomDelay()
//     clearInterval(t)
    
// }
// main()



