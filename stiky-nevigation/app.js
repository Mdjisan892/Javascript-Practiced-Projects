const nav = document.querySelector("nav");
const nextStikyEle = document.querySelector(".nextStikyEle");

let sElementOfset = nextStikyEle.offsetTop;
let navOfset = nav.offsetTop;
let navHeight = nav.offsetHeight;

window.addEventListener("scroll", () => {
    if (window.pageYOffset >= sElementOfset) {
        nextStikyEle.classList.add("sticky");
        nav.classList.remove("sticky");
    } 
    else if (window.pageYOffset >= navOfset) {
        nav.classList.add("sticky");
        document.body.style.paddingTop = `${navHeight}px`;
        nextStikyEle.classList.remove("sticky");
    }
     else {
        nav.classList.remove("sticky");
        document.body.style.paddingTop = "0";
        nextStikyEle.classList.remove("h1-sticky");
    }
});