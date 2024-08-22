let scroll = document.getElementById("scroll");

function checkscroll(){
        let percent= window.scrollY/(document.body.clientHeight-window.innerHeight);
        scroll.style.left = percent * 100 +"%";
}

checkscroll();

scroll.style.visibility = "visible";

window.addEventListener("scroll", event => {
    checkscroll();
});