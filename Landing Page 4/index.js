const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.getElementById("hamburger");
let closeBtn = document.createElement("i");
let navigation = document.querySelector(".navigation");
const btnSlider = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");

let toggle;

if (!toggle) {
  toggle = 1;
}

menuBtn.addEventListener("click", () => {
  if (toggle === 1) {
    closeBtn.setAttribute("class", "fa-solid fa-xmark");
    menuBtn.removeChild(hamburger);
    closeBtn.classList.add("close-btn");
    closeBtn.style.color = `#ffffff`;
    menuBtn.appendChild(closeBtn);
    toggle = 0;
  } else {
    menuBtn.removeChild(closeBtn);
    menuBtn.appendChild(hamburger);
    toggle = 1;
  }
});

var sliderNav = function (manual) {
  btnSlider.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  btnSlider[manual].classList.add("active");
  slides[manual].classList.add("active");
};

btnSlider.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

var slideMark;

if (!slideMark) {
  slideMark = 1;
}

setInterval(() => {
  btnSlider.forEach((btn) => {
    btn.classList.remove("active");
  });
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  btnSlider[slideMark].classList.add("active");
  slides[slideMark].classList.add("active");
  slideMark++;
  if (slideMark > 3) {
    slideMark = 0;
  }
}, 4500);
