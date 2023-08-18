if (window.innerWidth > 1100) {
  TweenMax.to(".block-1", 2, {
    x: "10",
    y: "-220",
    scale: "1.8",
    ease: Expo.easeInOut,
  });
  TweenMax.to(".block-2", 2, {
    x: "-180",
    y: "165",
    scale: "1.4",
    ease: Expo.easeInOut,
  });
  TweenMax.to(".block-3", 2, {
    x: "300",
    y: "-220",
    scale: "1.6",
    ease: Expo.easeInOut,
  });
  TweenMax.to(".block-4", 2, {
    x: "110",
    y: "165",
    scale: "1.2",
    ease: Expo.easeInOut,
  });
  TweenMax.from(".bg-text h1", 1, {
    delay: 0.5,
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".logo", 2, {
    delay: 1,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".menu", 2, {
    delay: 1.2,
    opacity: 0,
    x: -10,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".media", 2, {
    delay: 1.4,
    opacity: 0,
    x: -150,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".bottomnav", 1, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".bottomnav ul li:first-child", 0.5, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".bottomnav ul li:last-child", 1, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut,
  });
  TweenMax.from(".watchnow", 2, {
    delay: 2.8,
    opacity: 0,
    x: 20,
    ease: Expo.easeInOut,
  });
  TweenMax.to(".img img", 2, {
    delay: 1.5,
    opacity: 1,
    width: "60%",
    ease: Power2.easeInOut,
  });
}
