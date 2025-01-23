// Toggle Project Details
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle hamburger animation (optional)
    hamburgerMenu.classList.toggle('open');
});


function toggleDetails(header) {
    const details = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    
    if (details.style.display === 'block') {
      details.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
    } else {
      details.style.display = 'block';
      arrow.style.transform = 'rotate(90deg)';
    }
  }
  
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  