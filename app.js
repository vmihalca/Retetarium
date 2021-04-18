document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.carousel-header .splide', {
        'cover' : true,
        'heightRatio' : 0.3,
	    rewind: true,
        type    : 'fade',
        autoplay: true,
        interval: 3500,
        pauseOnFocus: true
    } ).mount();
} );

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('.carousel-circle .splide', {
        type   : 'loop',
	    perPage: 4,
	    perMove: 1,
        breakpoints: {
            800: {
                perPage: 3
            },
            600: {
                perPage: 2
            }
        }
    } ).mount();
} );

const myNav = document.querySelector('nav');

function makeChangeNav(e) {
    const scrollValue = window.scrollY;

    if(scrollValue > 0) {
        myNav.classList.add('sticky');
    }
    else {
        myNav.classList.remove('sticky');
    }
}
window.addEventListener('scroll',makeChangeNav);

//hamburger
const navbar = document.querySelector('.navbar_menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", function(){
    navbar.classList.toggle("responsive");
    hamburger.classList.toggle("rotate");
    document.body.classList.toggle('lock-scroll');
 });