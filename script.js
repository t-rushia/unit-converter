let unit = "";
let inputText = document.querySelector("#input-text");
const convertBtn = document.querySelector("#convert-btn");
const convertLength = document.querySelector("#length-el");
const convertVolume = document.querySelector("#volume-el");
const convertMass = document.querySelector("#mass-el");

convertBtn.addEventListener("click", function () {
  if (inputText.value === "" || isNaN(inputText.value)) {
    alert("Invalid entry, please enter a number");
    return;
  }
  let unit = parseInt(inputText.value);
  getLength(unit);
  getVolume(unit);
  getMass(unit);
  inputText.value = "";
});

inputText.addEventListener("keyup", function () {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector("#convert-btn").click();
  }
});

/*  1 meter = 3.281 ft
    1 liter = 0.264 gallon
    1 kilogram = 2.204 lbs
*/

function getLength(unit) {
  let totalFeet = unit * 3.28084;
  totalFeet = totalFeet.toFixed(3);
  let totalMeters = unit * 0.3048;
  totalMeters = totalMeters.toFixed(3);
  convertLength.textContent = `${unit} meters = ${totalFeet} feet | ${unit} feet = ${totalMeters} meters`;
}

function getVolume(unit) {
  let totalGallons = unit * 0.264172;
  totalGallons = totalGallons.toFixed(3);
  let totalLiters = unit * 3.78541;
  totalLiters = totalLiters.toFixed(3);
  convertVolume.textContent = `${unit} liters = ${totalGallons} gallons | ${unit} gallons = ${totalLiters} liters`;
}

function getMass(unit) {
  let totalPounds = unit * 2.20462;
  totalPounds = totalPounds.toFixed(3);
  let totalKilos = unit * 0.453592;
  totalKilos = totalKilos.toFixed(3);
  convertMass.textContent = `${unit} kilos = ${totalPounds} pounds | ${unit} pounds = ${totalKilos} kilos`;
}
