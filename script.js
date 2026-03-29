function scrollToSection() {
  document.getElementById("sobre").scrollIntoView({
    behavior: "smooth"
  });
}

const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});