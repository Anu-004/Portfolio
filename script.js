
let words=document.querySelectorAll(".word");
words.forEach((word)=>{ let letters=word.textContent.split("");
word.textContent="";
letters.forEach((letter)=>{
    let span=document.createElement("span");
    span.textContent=letter;
    span.className="letter";
    word.append(span);
});
});
let currntWindx=0;
let maxWindx=words.length-1;
words[currntWindx].style.opacity="1";
let changeText=()=>{
    let currentW=words[currntWindx];
    let nxtW=currntWindx===maxWindx?words[0]:words[currntWindx+1];

    Array.from(currentW.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        },i*80);
    });
    nxtW.style.opacity="1";
    Array.from(nxtW.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className="letter in";
        },340+i*80);
    });
    currntWindx=currntWindx===maxWindx?0:currntWindx+1;
};
changeText();
setInterval(100,200);
//active menu @inspect
let menuL=document.querySelectorAll('header ul li a')  //menulist,activemenu
let section=document.querySelectorAll('section')

function activeM(){
    let len=section.length;
    while(--len && window.scrollY + 97< section[len].offsetTop){
    menuL.forEach(sec=>sec.classList.remove("active"));
    menuL[len].classList.add("active");
}}
activeM();
window.addEventListener("scroll",activeM);

//sticky navbar
const header=document.querySelector("header");
window.addEventListener.toggle("sticky",window.scrollY>50)
//Toggle icon
let menuI=document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");
menuI.onclick=()=>{
    menuI.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
window.onclick=()=>{
    menuI.classList.remove("bx-x");
    navlist.classList.remove("open");
}
//parllox
const obsv=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){entry.target.classList.add("show-items");}
        else{ entry.target.classList.remove("show-items");}
    });
});
const scrollscale=document.querySelectorAll(".scroll-scale");
scrollscale.forEach((el)=>obsv.observe(el));


const scrolltop=document.querySelectorAll(".scroll-top");
scrollstop.forEach((el)=>obsv.observe(el));


const scrollbottom=document.querySelectorAll(".scroll-bottom");
scrollbottom.forEach((el)=>obsv.observe(el));