// NAVBAR SHADOW

window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){
    navbar.classList.add('scrolled');
  }

  else{
    navbar.classList.remove('scrolled');
  }

});



// SCROLL REVEAL

function revealSections(){

  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((section) => {

    const windowHeight = window.innerHeight;

    const revealTop = section.getBoundingClientRect().top;

    const revealPoint = 100;

    if(revealTop < windowHeight - revealPoint){

      section.classList.add('active');

    }

  });

}

window.addEventListener('scroll', revealSections);

revealSections();



// MOBILE MENU

const menuToggle = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuToggle.onclick = () => {

  navLinks.classList.toggle('active');

};