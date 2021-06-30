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
    if (btnId === "decrease") decreaseCounter();
    if (btnId === "reset") resetCounter();
  });
});

function increaseCounter() {
  counter.textContent += 1;
}
function decreaseCounter() {
  counter.textContent -= 1;
}
function resetCounter() {
  counter.textContent = 0;
}

