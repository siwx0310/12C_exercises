"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  document.querySelector("#generator").addEventListener("click", generateBox);
}

function generateBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = getRandomColor();

  document.querySelector("#generated").append(box);

  // TODO: Create FLIP animation

  // 1. first box: find the start position (getBoundingClientRect)
  const start = document.querySelector("#generator").getBoundingClientRect();

  // 2. last box: find the end position
  const end = box.getBoundingClientRect();
  // 3. invert: translate the element to the start-position
  const diffX = start.x - end.x;
  const diffY = start.y - end.y;

  box.style.transform = `translate(${diffX}px, ${diffY}px)`;

  box.offsetHeight; // reflow layout - nessary for Firefox

  // 4. play: animate the element to translate(0,0)
  requestAnimationFrame(function () {
    box.style.transition = "transform 1s";
    box.style.transform = "translate(0,0)";
  });
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
