
window.addEventListener('scroll', function() {
    var scroll = document.querySelector('#scrollToTop');
    scroll.classList.toggle("active", window.scrollY > 500)
})

function scrollToTop(){
    window.scrollTo({
        top:0
    })
} 

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    //Toggle
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

    //Animación
    navLinks.forEach((link, index)=>{
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
        }
        
        });
        //Animación burger
        burger.classList.toggle('toggle');

    });
    

}

navSlide();
