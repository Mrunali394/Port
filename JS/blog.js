// Toggle Blog Content
function toggleBlogContent(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.arrow');
    


if (content.style.display === 'block') {
    content.style.display = 'none';
    arrow.style.transform = 'rotate(0deg)';
    } else {
    content.style.display = 'block';
    arrow.style.transform = 'rotate(90deg)';
    }
  }
  
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  