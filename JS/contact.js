document.getElementById('hamburger').addEventListener('click', () => {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show');
});

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(16, 27, 39, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'cyan';
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, index) => {
    const text = characters.charAt(Math.floor(Math.random() * characters.length));
    ctx.fillText(text, index * fontSize, y * fontSize);
    if (y * fontSize > canvas.height || Math.random() > 0.975) drops[index] = 0;
    drops[index]++;
  });
}

setInterval(draw, 30);

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}

