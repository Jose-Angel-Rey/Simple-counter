"use strict";

const buttons = document.querySelectorAll(".btn");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
let counter = document.getElementById("counter");
let inicialCounter = counter.getAttribute("data-counter");

console.log(inicialCounter);
counter.textContent = inicialCounter;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnId = button.getAttribute("id");
    if (btnId === "increase") increaseCounter();
    if (btnId === "decrease") decreaseCounter();
    if (btnId === "reset") resetCounter();
  });
});

function changeCounterColor() {
  if (counter < 0) counter.style.color = "#c40d0d";
  if (counter > 0) counter.style.color = "#03a83a";
}
function increaseCounter() {
  inicialCounter++;
  counter.textContent = inicialCounter;
  changeCounterColor();
}
function decreaseCounter() {
  counter.textContent -= 1;
  changeCounterColor();
}
function resetCounter() {
  inicialCounter = 0;
  changeCounterColor();
}
