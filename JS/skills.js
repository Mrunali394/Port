const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle hamburger animation (optional)
    hamburgerMenu.classList.toggle('open');
});

  