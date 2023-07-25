function imgSlider(anything) {
  document.querySelector(".coke-can").src = anything;
}

gsap.from(".navbar", 2, {
  opacity: 0,
  x: -200,
  delay: 0.2,
  ease: Expo.easeInOut,
});
gsap.from(".stripe", 2, {
  opacity: 0,
  width: "100%",
  delay: 0.2,
  ease: Expo.easeInOut,
});
gsap.from(".para", 2, { opacity: 0, delay: 0.3 });
gsap.from(".coke", 2, { opacity: 0, y: -200, delay: 1.5 });
gsap.from(".header", 1, { opacity: 0, x: -60, delay: 2.8 });
gsap.from(".header-small", 1, { opacity: 0, x: -50, delay: 3.5 });
gsap.from(".media", 1, { opacity: 0, x: -200, delay: 3.8 });
gsap.from(".small-coke", 1, { opacity: 0, x: 200, delay: 3.8 });
