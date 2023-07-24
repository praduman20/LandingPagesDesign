const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", linkAction);
});

const bgHeader = () => {
  const header = document.getElementById("header");
  this.screenY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};

window.addEventListener("scroll", () => {
  bgHeader;
});

gsap.from(".home__image-2", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home__image-3", 1.2, { opacity: 0, y: 200, delay: 0.5 });
gsap.from(".home__data", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".home__bird-1", 1.2, { opacity: 0, y: -80, delay: 1.1 });
gsap.from(".home__bird-2", 1.2, { opacity: 0, y: 80, delay: 1.2 });
gsap.from(".home__image-1", 1.2, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".home__image-4", 1.2, { opacity: 0, y: 200, delay: 1.2 });
