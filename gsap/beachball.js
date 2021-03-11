"use strict";

// Exercise 1
// gsap.to(".ball", { duration: 2, x: 400 });
// gsap.to(".ball", { duration: 2, rotate: 200 });
// gsap.to(".ball", { delay: 5, scale: 0.5 });

// Exercise 3
const timeline = gsap.timeline({ repeat: 2, repeatDelay: 1 });
timeline.to(".ball", { duration: 2, x: 400, rotate: 200 });
timeline.to(".ball", { delay: 2, scale: 0.5 });
timeline.to(".ball", { y: -500, x: 800 });
