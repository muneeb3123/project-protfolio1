/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
      });
    }
  });

  // eslint-disable-next-line max-len
  // ============================================= sticky navbar ==============================================
  const header = document.querySelector('.header-menu');

  header.classList.toggle('sticky', window.scrollY > 1000);

  // ============================================= remove toogle icon navbar when pressed ==============================================
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ============================================= toogle icon navbar ==============================================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// eslint-disable-next-line no-unused-vars, no-undef
const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ============================================= scroll reveal ==============================================
/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  ScrollReveal({
    distance: '100px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(' .hero-header, .myselfHd, .skillHd, .contact-header , .btn-cv, .works-div', {
    origin: 'bottom',
  });

  ScrollReveal().reveal('.contact-container, .box1, .skill-1', {
    origin: 'top',
    scale: 0.5,
    distance: '0px',
  });

  ScrollReveal().reveal('.last', {
    origin: 'right',
  });

  ScrollReveal().reveal('.first', {
    origin: 'left',
  });
  ScrollReveal().reveal('.myself-paragraph', {
    opacity: 0,
  });
});
