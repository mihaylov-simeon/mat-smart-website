const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#company-logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Scroll Tracker
const scrollBarTracker = () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("my__bar").style.width = `${scrolled}%`;
};

window.addEventListener('scroll', scrollBarTracker);

// Show active menu when scrolling
const highlightMenu = () => {
  const element = document.querySelector('.highlight');
  const scrollPosition = window.scrollY;
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  const portfolioMenu = document.querySelector('#portfolio-page');

  if (window.innerWidth > 960 && scrollPosition < 600) {
    homeMenu.classList.add('highlight');
    [aboutMenu, servicesMenu, portfolioMenu].forEach(item => item.classList.remove('highlight'));
  } else if (window.innerWidth > 960 && scrollPosition < 1400) {
    aboutMenu.classList.add('highlight');
    [homeMenu, servicesMenu, portfolioMenu].forEach(item => item.classList.remove('highlight'));
  } else if (window.innerWidth > 960 && scrollPosition < 2345) {
    servicesMenu.classList.add('highlight');
    [homeMenu, aboutMenu, portfolioMenu].forEach(item => item.classList.remove('highlight'));
  } else if (window.innerWidth > 960 && scrollPosition < 3100) {
    portfolioMenu.classList.add('highlight');
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
