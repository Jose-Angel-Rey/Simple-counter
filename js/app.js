"use strict";

let count = 0;
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

value.textContent = count;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnClassList = e.target.classList;
    // Change counter value
    if (btnClassList.contains("increase")) count++;
    if (btnClassList.contains("decrease")) count--;
    if (btnClassList.contains("reset")) count = 0;
    // Change counter value color
    if (count > 0) value.style.color = "#106310";
    if (count < 0) value.style.color = "#c90303";
    if (count === 0) value.style.color = "#888";
    value.textContent = count;
  });
});
