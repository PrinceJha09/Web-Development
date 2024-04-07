console.log("Hello world")

document.body.firstElementChild //text node ko neglect krega...
document.body.firstElementChild.childNodes // include all texts, comments and elements..
document.body.firstElementChild.children //.children sirf elements dega as a HTML collection
document.body.firstElementChild.children[3].nextElementSibling //element sibling
document.body.firstElementChild.children[3].previousSibling // any previous sibling, text, comment or element.