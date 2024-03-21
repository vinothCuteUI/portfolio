//Get elements
let bg = document.getElementById("bg");
let text1 = document.getElementById("text-1");
let text2 = document.getElementById("text-2");
let text3 = document.getElementById("text-3");
let btn = document.getElementById("btn");
let chocoBx = document.getElementById("choco-bx");
let choco1 = document.getElementById("choco-1");
let choco2 = document.getElementById("choco-2");
let chocoPs1 = document.getElementById("choco-ps-1");
let chocoPs2 = document.getElementById("choco-ps-2");

//Animations
function animation(){
    setTimeout(()=>{
        chocoBx.classList.add("active-bx");
        choco1.classList.add("active-choco1");
        choco2.classList.add("active-choco2");
        chocoPs1.classList.add("active-chocops1");
        chocoPs2.classList.add("active-chocops2");
    }, 0);
    setTimeout(()=>{ bg.classList.add("active-bg") }, 0);
    setTimeout(()=>{ text1.classList.add("active-txt")}, 1000);
    setTimeout(()=>{text2.classList.add("active-txt")}, 1200);
    setTimeout(()=>{text3.classList.add("active-txt")}, 1300);
    setTimeout(()=>{btn.classList.add("active-btn")}, 1400);
}


setInterval(()=>{
    chocoBx.classList.remove("active-bx");
    choco1.classList.remove("active-choco1");
    choco2.classList.remove("active-choco2");
    chocoPs1.classList.remove("active-chocops1");
    chocoPs2.classList.remove("active-chocops2");
    bg.classList.remove("active-bg");
    text1.classList.remove("active-txt");
    text2.classList.remove("active-txt");
    text3.classList.remove("active-txt");
    btn.classList.remove("active-btn");
    animation();
}, 10000)

window.load = animation();