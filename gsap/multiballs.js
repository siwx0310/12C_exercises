"use strict";

gsap.to(".ball", { duration: 2, x: 400, stagger: 0.2, rotate: 200 });
/*
gsap.to(".ball", { duration: 2, x: 400, stagger: 0.2 });
gsap.to(".ball", { duration: 2, rotate: 200 });
*/
gsap.to(".ball", { delay: 2, scale: 0.5 });
gsap.to(".ball", { yoyo: true, y: -300, repeat: -1 });
