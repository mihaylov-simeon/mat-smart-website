document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');
  const navLogo = document.querySelector('#company-logo');
  const topBtn = document.querySelector('#topBtn');
  const navBarBtn = document.querySelector("#contacts-page");

  if (window.location.hash) {
    window.location.href = window.location.hash.split('#')[0];
  }

  navLogo.addEventListener('click', function() {
    topFunction();

    if (window.location.hash) {
      window.location.href = window.location.hash.split('#')[0];
    };
  });

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
    navBarBtn.classList.toggle('active');
  };

  menu.addEventListener('click', mobileMenu);

  // Show active menu when scrolling
  const highlightMenu = () => {
    const scrollPosition = window.scrollY;
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#services-page');
    const partnersMenu = document.querySelector('#partners-page');
    const windowWidth = window.innerWidth;

    const removeHighlight = (menu) => {
      menu.forEach(item => item.classList.remove('highlight'));
    };

    if (windowWidth > 960) {
      if (scrollPosition < 500) {
        homeMenu.classList.add('highlight');
        removeHighlight([aboutMenu, servicesMenu, partnersMenu]);
      } else if (scrollPosition < 1300) {
        aboutMenu.classList.add('highlight');
        removeHighlight([homeMenu, servicesMenu, partnersMenu]);
      } else if (scrollPosition < 2300) {
        servicesMenu.classList.add('highlight');
        removeHighlight([homeMenu, aboutMenu, partnersMenu]);
      } else if (scrollPosition < 2400) {
        partnersMenu.classList.add('highlight');
        removeHighlight([homeMenu, aboutMenu, servicesMenu]);
      } else {
        partnersMenu.classList.add('highlight');
        removeHighlight([homeMenu, aboutMenu, servicesMenu]);
      }
    } else {
      if (scrollPosition < 600) {
        removeHighlight([homeMenu, aboutMenu, servicesMenu, partnersMenu]);
      }
    }
  };

  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);

  // Close mobile menu when clicking on a menu item
  const hideMenu = () => {
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
      menuLinks.classList.remove('active');
      navBarBtn.classList.remove('active');
    }
  };

  const menuItems = document.querySelectorAll('.navbar__links');
  menuItems.forEach(item => {
    item.addEventListener('click', hideMenu);
  });

  navBarBtn.addEventListener('click', hideMenu);

  // Explore our services button clickable
  const exploreServicesBtn = document.querySelector('.main__btn');

  exploreServicesBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const url = '#services';
    window.location.href = url;
  });

  // Scroll Tracker
  const scrollBarTracker = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("my__bar").style.width = `${scrolled}%`;
  };

  window.addEventListener('scroll', scrollBarTracker);

  function scrollFunction() {
    if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }

  window.addEventListener('scroll', function () {
    scrollFunction();
    scrollBarTracker();
    highlightMenu();
  });

  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  let formData;

  // Contact form EmailJS initialization
  var _0x78b7 = ["\x34\x6A\x44\x51\x5F\x43\x49\x55\x78\x58\x76\x45\x7A\x4B\x77\x49\x42"];
  var apiKey = "";
  for (var _0x2f96c5 = 0x0; _0x2f96c5 < _0x78b7.length; _0x2f96c5++) {
      apiKey += _0x78b7[_0x2f96c5];
  }
  emailjs.init(apiKey);

  const contactForm = document.querySelector("#contact-form");

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted!');

    formData = {
        name: document.getElementById('name').value,
        subject: document.getElementById('subject').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log("Form Data:", formData);

    // Send the form data using EmailJS
    emailjs.send("service_i2ou9ou", "template_kv6vn1w", formData)
        .then(function(response) {
            console.log('Email sent successfully:', response);
        }, function(error) {
            console.error('Email sending failed:', error);
        });

    contactForm.reset();
  });
});

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  if (window.location.hash) {
    window.location.href = window.location.hash.split('#')[0];
  };
};

topBtn.addEventListener('click', topFunction);
