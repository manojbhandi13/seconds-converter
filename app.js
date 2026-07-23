let starterButton = document.querySelector("#starter-button");
let inputSeconds = document.querySelector("input");
let converterButtton = document.querySelector("#converter-button");
let conversion = document.querySelector("div");
let resetButton = document.querySelector("#reset-button");
let body = document.querySelector("body");
let div = document.querySelector("div");
let h1 = document.querySelector("#heading");

let secs;
let hours;
let minutes;
let seconds;

const startProcess = () => {
  starterButton.classList.add("hide");
  inputSeconds.classList.remove("hide");
  converterButtton.classList.remove("hide");
  converterButtton.classList.add("converter-button-class");
  body.classList.add("change-flex-direction");
};

starterButton.addEventListener("click", startProcess);

const inputProcess = () => {
  inputSeconds.setAttribute("placeholder", "");
};

inputSeconds.addEventListener("click", inputProcess);

const convertProcess = () => {
  secs = inputSeconds.value;
  console.log(secs);
  inputSeconds.classList.add("hide");
  converterButtton.classList.add("hide");
  div.classList.remove("hide");
  hours = Math.floor(secs / 3600);
  hoursF = String(hours).padStart(2, "0");
  minutes = Math.floor((secs / 60) % 60);
  minutesF = String(minutes).padStart(2, "0");
  seconds = Math.floor(secs % 60);
  secondsF = String(seconds).padStart(2, "0");
  div.innerText = `${hoursF} : ${minutesF} : ${secondsF}`;
  resetButton.classList.remove("hide");
  h1.classList.remove("hide");
};

converterButtton.addEventListener("click", convertProcess);

const resetProcess = () => {
  inputSeconds.classList.remove("hide");
  converterButtton.classList.remove("hide");
  div.classList.add("hide");
  resetButton.classList.add("hide");
  inputSeconds.value = "";
  h1.classList.add("hide");
};

resetButton.addEventListener("click", resetProcess);
