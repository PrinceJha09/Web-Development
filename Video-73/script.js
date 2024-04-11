let cont = document.querySelector(".container");
function createCard(title, cName, views, monthOld, duration, thumbnail){
    let html = `<div class="card">
    <div class="image">
        <img src=${thumbnail}>
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h3>${title}</h3>
        <p>${cName}   .   ${views/1000000}M views    .   ${monthOld} months ago</p>
    </div>`
cont.innerHTML = cont.innerHTML + html;
};

createCard("Introduction to node.js | Sigma Web Development Course - Tutorial #2", "Code With Harry", 1400000, 5, "34:20", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");