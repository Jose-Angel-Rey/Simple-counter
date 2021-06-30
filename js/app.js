"use strict";

const buttons = document.querySelectorAll(".btn");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
let counter = document.getElementById("counter");

counter.textContent = 0;

console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnId = button.getAttribute("id");
    if (btnId === "increase") increaseCounter();
  });
});

function increaseCounter() {
  counter.textContent += 1;
}
