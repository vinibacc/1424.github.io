window.onscroll = function() {
    myFunction()
};
var header = document.getElementById("menu");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        $(".navbar-light .navbar-nav .nav-link").css("color", "#000");
    } else {
        header.classList.remove("sticky");
        $(".navbar-light .navbar-nav .nav-link").css("color", "#fff");
    }
}