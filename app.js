const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Scroll Tracker

function scrollBarTracker() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("my__bar").style.width = scrolled + "%";
  }

  window.addEventListener('scroll', scrollBarTracker);


  // Show active menu when scrolling

const hightlightMenu = () => {
  const element = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const services = document.querySelector('#services-page');
  const portfolio = document.querySelector('#portfolio-page');

  let scrollPosition = window.scrollY;

  // add highlight class to menu items

  if (window.innerWidth > 960 && scrollPosition < 600) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    portfolio.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPosition < 1400) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    services.classList.remove('highlight')
    portfolio.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPosition < 2345) {
    services.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    portfolio.classList.remove('highlight')
    return
  } else if (window.innerWidth > 960 && scrollPosition < 3100) {
    portfolio.classList.add('highlight')
    services.classList.remove('highlight')
    return
  }

  if((element && window.innerWidth < 960 && scrollPosition < 600) || element) {
    element.classList.remove('highlight')
  }
};

  window.addEventListener('scroll', hightlightMenu)
  window.addEventListener('click', hightlightMenu)

  // Close mobile menu when clicking on a menu item

  const hideMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 760 && menuBars) {
      menu.classList.toggle('is-active')
      menuLinks.classList.remove('active');
    }
  };

  menuLinks.addEventListener('click', hideMenu);
  navLogo.addEventListener('click', hideMenu);
