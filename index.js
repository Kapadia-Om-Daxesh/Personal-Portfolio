let menuIcon=document.querySelector("#main-page-menu-icon");
let navlist=document.querySelector(".main-page-navigationbar");
menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}
window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}
window.onload = () => {
   
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 20
    }).reveal('.main-page-image, .education-h1,.skill-text h3,.project-div-h3', { origin: 'top' });

    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.main-page-info,.left,.contact-text-title', { origin: 'left' });
    ScrollReveal().reveal('.right', { origin: 'right' });
};