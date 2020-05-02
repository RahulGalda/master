let diceBox1 = document.getElementById("dice__container1");
let diceBox2 = document.getElementById("dice__container2");
let diceBox3 = document.getElementById("dice__container3");

let rollButton = document.getElementById("dice__button");

let diceNumber1 = Math.floor(Math.random() * 6 + 1);
let diceNumber2 = Math.floor(Math.random() * 6 + 1);
let diceNumber3 = Math.floor(Math.random() * 6 + 1);

let diceImage1 = document.createElement("IMG");
diceImage1.setAttribute("id", "dice__img1");

let diceImage2 = document.createElement("IMG");
diceImage2.setAttribute("id", "dice__img2");

let diceImage3 = document.createElement("IMG");
diceImage3.setAttribute("id", "dice__img2");

let displayDice1 = function (diceNumber) {
  switch (diceNumber) {
    case 1:
      diceImage1.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage1.setAttribute("alt", "Dice " + diceNumber);
    case 2:
      diceImage1.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage1.setAttribute("alt", "Dice " + diceNumber);
    case 3:
      diceImage1.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage1.setAttribute("alt", "Dice " + diceNumber);
    case 4:
      diceImage1.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage1.setAttribute("alt", "Dice " + diceNumber);
    case 5:
      diceImage1.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage1.setAttribute("alt", "Dice " + diceNumber);
    case 6:
      diceImage1.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage1.setAttribute("alt", "Dice " + diceNumber);
  }
  diceBox1.appendChild(diceImage1);
};

let displayDice2 = function (diceNumber) {
  switch (diceNumber) {
    case 1:
      diceImage2.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage2.setAttribute("alt", "Dice " + diceNumber);
    case 2:
      diceImage2.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage2.setAttribute("alt", "Dice " + diceNumber);
    case 3:
      diceImage2.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage2.setAttribute("alt", "Dice " + diceNumber);
    case 4:
      diceImage2.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage2.setAttribute("alt", "Dice " + diceNumber);
    case 5:
      diceImage2.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage2.setAttribute("alt", "Dice " + diceNumber);
    case 6:
      diceImage2.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage2.setAttribute("alt", "Dice " + diceNumber);
  }
  diceBox2.appendChild(diceImage2);
};

let displayDice3 = function (diceNumber) {
  switch (diceNumber) {
    case 1:
      diceImage3.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage3.setAttribute("alt", "Dice " + diceNumber);
    case 2:
      diceImage3.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage3.setAttribute("alt", "Dice " + diceNumber);
    case 3:
      diceImage3.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage3.setAttribute("alt", "Dice " + diceNumber);
    case 4:
      diceImage3.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage3.setAttribute("alt", "Dice " + diceNumber);
    case 5:
      diceImage3.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage3.setAttribute("alt", "Dice " + diceNumber);
    case 6:
      diceImage3.setAttribute("src", "/images/" + diceNumber + ".png");
      diceImage3.setAttribute("alt", "Dice " + diceNumber);
  }
  diceBox3.appendChild(diceImage3);
};

let rollDice = function () {
  rollButton.setAttribute("class", "disabled");
  rollButton.disabled = true;
  let counter = 0;
  let numberOfRolls = Math.floor(Math.random() * 3 + 5);
  //   console.log("Number of rolls: " + numberOfRolls);
  let frame = setInterval(displayRoll, 500);
  displayRoll();
  let rollsCompleted = setInterval(function () {
    counter++;
    // console.log(counter);
    if (counter === numberOfRolls) {
      clearInterval(frame);
      clearInterval(rollsCompleted);
      rollButton.classList.remove("disabled");
      rollButton.disabled = false;
    }
  }, 500);
};

function displayRoll() {
  diceNumber1 = Math.floor(Math.random() * 6 + 1);
  diceNumber2 = Math.floor(Math.random() * 6 + 1);
  diceNumber3 = Math.floor(Math.random() * 6 + 1);
  displayDice1(diceNumber1);
  displayDice2(diceNumber2);
  displayDice3(diceNumber3);
}

displayDice1(diceNumber1);
displayDice2(diceNumber2);
displayDice3(diceNumber3);

// console.log("Dice 1 value: " + diceNumber1);
// console.log("Dice 2 value: " + diceNumber2);
// console.log("Dice 3 value: " + diceNumber3);
console.log(rollButton);
