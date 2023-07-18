let unit = "";
let inputText = document.querySelector("#input-text");
const convertBtn = document.querySelector("#convert-btn");
const length = document.querySelector("#length");
const volume = document.querySelector("#volume");
const mass = document.querySelector("#mass");

convertBtn.addEventListener("click", function () {
  if (inputText.value === "" || isNaN(inputText.value)) {
    alert("Invalid entry, please enter a number.");
    return;
  } else {
    unit = inputText.value;
  }
  getLength(unit);
  getVolume(unit);
  getMass(unit);
});

/*  1 meter = 3.281 ft
    1 liter = 0.264 gallon
    1 kilogram = 2.204 lbs
*/

function getLength(unit) {
  let result = unit * 3.281;
}

function getVolume(unit) {}

function getMass(unit) {}
