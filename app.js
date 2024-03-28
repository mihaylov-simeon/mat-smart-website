document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');
  const navLogo = document.querySelector('#company-logo');
  const topBtn = document.querySelector('#topBtn');
  const navBarBtn = document.querySelector("#contacts-page");

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

    const removeHighlight = (menus) => {
      menus.forEach(item => item.classList.remove('highlight'));
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
        partnersMenu.classList.add('highlight'); // Adjusted condition
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
  window.addEventListener('scroll', function () {
    scrollFunction();
    scrollBarTracker();
    highlightMenu();
  });

  // Implement Lazy Loading for Images
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('loading', 'lazy');
  });

  emailjs.init("4jDQ_CIUxXvEzKwIB");

  const contactForm = document.querySelector("#contact-form");
  
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      console.log('Form submitted!');
      
      // Get the form data
      const formData = {
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
              // Optionally, display a success message or redirect the user
          }, function(error) {
              console.error('Email sending failed:', error);
              // Optionally, display an error message to the user
          });
  
      // Reset the form after submission
      contactForm.reset();
  });
  
});
