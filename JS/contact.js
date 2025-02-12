document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const output = document.getElementById("output");
  output.innerHTML = "> Sending message...";
  
  setTimeout(() => {
      output.innerHTML += "<br>> Message sent successfully!";
  }, 2000);
});
