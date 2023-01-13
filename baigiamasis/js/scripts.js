window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("after-scroll", window.scrollY > 0);
    header.classList.toggle("after-scroll", window.scrollY > 0);
});