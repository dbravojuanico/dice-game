const images = [
  "./public/imges/dice-six-faces-zero.png",
  "./public/imges/dice-six-faces-one.png",
  "./public/imges/dice-six-faces-two.png",
  "./public/imges/dice-six-faces-three.png",
  "./public/imges/dice-six-faces-four.png",
  "./public/imges/dice-six-faces-five.png",
  "./public/imges/dice-six-faces-six.png",
];

let rolledA = false;
let rolledB = false;
let valueA = 0;
let valueB = 0;
let storedValue = 0;

function randomImage() {
  const randomValue = Math.floor(Math.random() * (images.length - 1)) + 1;
  storedValue = randomValue;
  return images[randomValue];
}

function declareWinner() {
  if (valueA > valueB) {
    document.getElementById("mainText").innerText = "Player 1 wins";
  }
  if (valueB > valueA) {
    document.getElementById("mainText").innerText = "Player 2 wins";
  }
  if (valueB === valueA) {
    document.getElementById("mainText").innerText = "Draw!";
  }
  setTimeout(reset, 2000);
}

function reset() {
  document.getElementById("imageA").src = images[0];
  document.getElementById("imageB").src = images[0];
  rolledA = false;
  rolledB = false;
  valueA = 0;
  valueB = 0;
  document.getElementById("mainText").innerText = "ROLL THE DICE!";
  document.getElementById("buttonA").disabled = false;
  document.getElementById("buttonB").disabled = false;
}

const buttonA = document.getElementById("buttonA");
buttonA.addEventListener("click", rollA);

function rollA() {
  document.getElementById("imageA").src = randomImage();
  document.getElementById("buttonA").disabled = true;
  valueA = storedValue;
  rolledA = true;
  if (rolledA && rolledB) {
    declareWinner();
  }
}

const buttonB = document.getElementById("buttonB");
buttonB.addEventListener("click", rollB);

function rollB() {
  document.getElementById("imageB").src = randomImage();
  document.getElementById("buttonB").disabled = true;
  valueB = storedValue;
  rolledB = true;
  if (rolledA && rolledB) {
    declareWinner();
  }
}
