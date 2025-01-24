// Toggle extra content in About Me section
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
document.getElementById('toggle-extra').addEventListener('click', () => {
    const extraContent = document.getElementById('extra-content');
    if (extraContent.classList.contains('hidden')) {
      extraContent.classList.remove('hidden');
      document.getElementById('toggle-extra').textContent = 'Show Less';
    } else {
      extraContent.classList.add('hidden');
      document.getElementById('toggle-extra').textContent = 'Read More';
    }
  });
  
  // Animate skill bars
  window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
      const percent = skill.getAttribute('data-percent');
      if (skill.getBoundingClientRect().top < window.innerHeight) {
        skill.style.width = percent + '%';
      }
    });
  });
  
  // Simulate form submission
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent.');
    e.target.reset();
  });
<<<<<<< HEAD


  
=======
>>>>>>> 7254664 (Initial commit of portfolio files)
