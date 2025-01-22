// Toggle Project Details
document.getElementById('hamburger').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
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
  