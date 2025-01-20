// Toggle Project Details
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
  