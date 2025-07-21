/* ===== toggle style switcher ====*/
const styleSwitcherToggle  = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
/* ===== typing animation ====*/
var typed =  new Typed(".typing",{
    strings:["Web Designer","Web Developer","Product Designer", "YouTuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

