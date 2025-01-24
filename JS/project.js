// Toggle Project Details
<<<<<<< HEAD
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle hamburger animation (optional)
    hamburgerMenu.classList.toggle('open');
});


=======
>>>>>>> 7254664 (Initial commit of portfolio files)
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
<<<<<<< HEAD
  }
  
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  
=======
  }
>>>>>>> 7254664 (Initial commit of portfolio files)
