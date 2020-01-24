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
    }
}

$('#carousel-1').carousel({
    interval: 4000,
    wrap: true,
    keyboard: true
});

$('#carousel-2').carousel({
    interval: 6000,
    wrap: true,
    keyboard: true
});