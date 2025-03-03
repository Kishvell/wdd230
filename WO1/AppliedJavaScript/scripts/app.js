// Select the HTML elements
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');
const tempInput = document.querySelector('#temp');
const divsCount = document.querySelector('#divs');
const citiesC = document.querySelector('#c-names');

// Variables for activity use
let citynames = ["New York", "Sacramento", "Cleveland", "South Bend", "Tampa Bay", "Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

// Date Formatting Function
function displayFormattedDate() {
  const options = { month: "short", day: "numeric", year: "numeric" };
  today1.innerHTML = `Today's date is ${new Date().toLocaleDateString("en-US", options)}`;
}

// Volume Display Function
function displayVolume() {
  today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;
}

// Welcome Message Function
function displayWelcomeMessage() {
  message.innerHTML = 'Welcome to <mark>our</mark> neighborhood!';
}

// Temperature Conversion Function
function displayCelsius() {
  tempInput.value = `${getCelsius(33).toFixed(1)} °C`;
}

// Div Count Function
function displayDivCount() {
  const divs = document.querySelectorAll('div');
  divsCount.textContent = `${divs.length} divs in document.`;
}

// City Filter Function
function displayCitiesStartingWithC() {
  let filterC = citynames.filter(city => city.charAt(0) === 'C');
  citiesC.textContent = `Cities starting with "C": ${filterC.join(', ')}`;
}

// Call the functions to execute the tasks
displayFormattedDate();
displayVolume();
displayWelcomeMessage();
displayCelsius();
displayDivCount();
displayCitiesStartingWithC();
