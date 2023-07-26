gsap.from(".shoe-image", 2, {
  opacity: 0,
  rotation: 90,
  delay: 1.2,
  ease: "easeInOut",
});
gsap.from(".navbar", 1, { opacity: 0, x: -200, delay: 0.5 });
gsap.from(".home", 1, { opacity: 0, delay: 0.5 });
gsap.from(".info", 1, { opacity: 0, x: -100, delay: 2 });
