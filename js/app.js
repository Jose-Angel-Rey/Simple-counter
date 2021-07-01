"use strict";

let count = 0;
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");
value.textContent = count;
console.log(buttons);

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnClassList = e.target.classList;
    if (btnClassList.contains("increase")) count++;
    if (btnClassList.contains("decrease")) count--;
    if (btnClassList.contains("reset")) count = 0;
    value.textContent = count;
  });
});
