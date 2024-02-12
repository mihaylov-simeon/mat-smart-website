const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#company-logo');
const topBtn = document.querySelector('#topBtn');

// Disable right-clicking and dragging
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});

document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const element = document.querySelector('.highlight');
  const scrollPosition = window.scrollY;
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const partnersMenu = document.querySelector('#partners-page');

  if (window.innerWidth > 960 && scrollPosition < 500) {
    homeMenu.classList.add('highlight');
    [aboutMenu, servicesMenu, partnersMenu].forEach(item => item.classList.remove('highlight'));
  } else if (window.innerWidth > 960 && scrollPosition < 1200) {
    aboutMenu.classList.add('highlight');
    [homeMenu, servicesMenu, partnersMenu].forEach(item => item.classList.remove('highlight'));
  } else if (window.innerWidth > 960 && scrollPosition < 2000) {
    servicesMenu.classList.add('highlight');
    [homeMenu, aboutMenu, partnersMenu].forEach(item => item.classList.remove('highlight'));
  } else if (window.innerWidth > 960 && scrollPosition < 2500) {
    partnersMenu.classList.add('highlight');
    [homeMenu, aboutMenu, servicesMenu].forEach(item => item.classList.remove('highlight'));
  } else {
    if (element && window.innerWidth < 960 && scrollPosition < 600) {
      element.classList.remove('highlight');
    }
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMenu = () => {
  if (window.innerWidth < 960) {
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  }
};

const menuItems = document.querySelectorAll('.navbar__links');
menuItems.forEach(item => {
  item.addEventListener('click', hideMenu);
});

// Explore our services button clickable
document.addEventListener('DOMContentLoaded', function() {
  const exploreServicesBtn = document.querySelector('.main__btn');

  exploreServicesBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // Validate and sanitize URL input before setting it
    const url = '#services';
    window.location.href = url;
  });
});

// ================================== SCROLL FUNCTIONS ==================================

// Scroll Tracker
const scrollBarTracker = () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("my__bar").style.width = `${scrolled}%`;
};

window.addEventListener('scroll', scrollBarTracker);

// When the user scrolls down 1500px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Back to top function
function topFunction() {
  // Smoothly scroll to the top of the document
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add click event listener to topBtn
topBtn.addEventListener('click', topFunction);

// call functions on scroll
window.onscroll = function () {
  scrollFunction();
  scrollBarTracker();
};

// Testimonials

jQuery(document).ready(function($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots:true,
      autoplayTimeout: 7000,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
  });
});
