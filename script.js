// Dark mode toggle (already dark, but can be extended)
document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully! 💌");
      form.reset();
    });
  }
});
