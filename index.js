const images = [
  "./public/imges/dice-six-faces-zero.png",
  "./public/imges/dice-six-faces-one.png",
  "./public/imges/dice-six-faces-two.png",
  "./public/imges/dice-six-faces-three.png",
  "./public/imges/dice-six-faces-four.png",
  "./public/imges/dice-six-faces-five.png",
  "./public/imges/dice-six-faces-six.png",
];

function randomImage() {
  const randomValue = Math.floor(Math.random() * (images.length - 1)) + 1;
  console.log(randomValue);
  return images[randomValue];
}

const buttonA = document.getElementById("buttonA");
buttonA.addEventListener("click", rollA);

function rollA() {
  document.getElementById("imageA").src = randomImage();
}

const buttonB = document.getElementById("buttonB");
buttonB.addEventListener("click", rollB);

function rollB() {
  document.getElementById("imageB").src = randomImage();
}
