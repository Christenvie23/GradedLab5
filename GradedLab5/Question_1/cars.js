//225133330
//CM NLOLO

// Array of car makes
const makes = ["Ford", "Chevrolet", "Audi"];

// Array of car
const cars = [
  {
    name: "Mustang",
    type: "Coupe",
    img: "images/ford.webp",
    make: "Ford",
  },
  {
    name: "Camaro",
    type: "Coupe",
    img: "images/chevrolet.webp",
    make: "Chevrolet",
  },
  {
    name: "A4",
    type: "Sedan",
    img: "images/audi.jpg",
    make: "Audi",
  },
];

// Game state variables
let currentCar = null;
let correct = 0;
let total = 0;

//Add events to the button
document.addEventListener("DOMContentLoaded", function () {
  initializeGame();
});

// Initialize the game
function initializeGame() {
  populateMakeDropdown();
  loadRandomCar();
  enableGuessButton();

  document
    .getElementById("guess-btn")
    .addEventListener("click", handleGuess);
}

//add options to the dropdown
function populateMakeDropdown() {
  const select = document.getElementById("make-list");

  makes.forEach(function (make) {
    const option = document.createElement("option");
    option.value = make;
    option.textContent = make;
    select.appendChild(option);
  });
}

// Load a random car
function loadRandomCar() {
  const randomIndex = Math.floor(Math.random() * cars.length);
  currentCar = cars[randomIndex];

  document.getElementById("car-name").textContent = currentCar.name;
  document.getElementById("car-type").textContent = currentCar.type;

  const img = document.getElementById("car-img");
  img.src = currentCar.img;
  img.classList.remove("hidden");
}

// Handle the guess
function handleGuess() {
  disableGuessButton();

  const selectedMake = document.getElementById("make-list").value;

  if (selectedMake === currentCar.make) {
    correct++;
    document.getElementById("correct").textContent = correct;
  }

  total++;
  document.getElementById("total").textContent = total;

  loadRandomCar();
  enableGuessButton();
}

// Enable and disable the guess button
function enableGuessButton() {
  document.getElementById("guess-btn").classList.remove("disabled");
}

// Disable the guess button to prevent multiple clicks
function disableGuessButton() {
  document.getElementById("guess-btn").classList.add("disabled");
}