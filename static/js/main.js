
/*------------------
    Preloader
--------------------*/
window.onload = function () {
    $("#onload").fadeOut();
    $("body").removeClass("cargar__preloader").delay(200);
}

const navToggle = document.querySelector(".nav-toggle");
const navMenu1 = document.querySelector(".header__inferior");
const navMenu2= document.querySelector(".header__superior");

navToggle.addEventListener("click", () => {
    navMenu1.classList.toggle("nav__menu-visible")
    navMenu2.classList.toggle("nav__menu-visible")
})