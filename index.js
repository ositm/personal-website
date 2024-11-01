// Menu and dark mode toggle functionality
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let darkModeIcon = document.querySelector('#darkMode-icon');

// Toggle menu icon and navbar
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Handle dark mode toggle
darkModeIcon.onclick = () => {
  document.body.classList.toggle('dark-mode');

  // Change the icon based on dark mode state
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.classList.remove('bx-moon');
    darkModeIcon.classList.add('bx-sun');
  } else {
    darkModeIcon.classList.remove('bx-sun');
    darkModeIcon.classList.add('bx-moon');
  }
};

// Scroll and navigation functionality
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
