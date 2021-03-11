"use strict";

let elementToPaint;

document.addEventListener("DOMContentLoaded", start);

async function start() {
  let response = await fetch("cap-01.svg");
  let svgData = await response.text();
  document.querySelector("#svg").innerHTML = svgData;
  startManipulateSVG();
}

function startManipulateSVG() {
  document.querySelectorAll(".interactive_g").forEach((pathGroup) => {
    console.log("pathGroups");
    pathGroup.addEventListener("mouseover", displayPathStroke);
    pathGroup.addEventListener("click", clickOnGoup);
  });
  document.querySelectorAll(".color_btn").forEach((color_btn) => {
    color_btn.addEventListener("click", clickPickColor);
  });
}

function displayPathStroke() {
  console.log("mouseover on path");
  this.style.stroke = "#000000";
  this.addEventListener("mouseout", () => {
    this.style.stroke = "none";
  });
}

function clickOnGoup() {
  console.log("the group has been clicked");
  elementToPaint = this;
  this.style.fill = "lightgrey";
}

function clickPickColor() {
  console.log("the color buttton has been clicked", this.getAttribute("fill"));
  if (elementToPaint != undefined) {
    elementToPaint.style.fill = this.getAttribute("fill");
  }
}
