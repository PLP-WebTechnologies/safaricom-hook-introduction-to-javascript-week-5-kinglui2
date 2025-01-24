// Part 1: JavaScript Basics

// Variables and Data Types
const name = "Coder";
const age = 25;
const isStudent = true;
const hobbies = ["Reading", "Coding", "Hiking"];
const userInfo = {
  name: "King Luiz",
  age: 30,
  isEmployed: true,
};

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`User Info: ${JSON.stringify(userInfo)} (Type: ${typeof userInfo})`);

// Calculator Function with Interaction
function runCalculator() {
  const num1 = prompt("Enter the first number:");
  const num2 = prompt("Enter the second number:");
  const operation = prompt("Choose an operation (+, -, *, /):");

  // Validate inputs
  if (isNaN(num1) || isNaN(num2) || !["+", "-", "*", "/"].includes(operation)) {
    alert("Invalid input. Please provide valid numbers and a supported operation.");
    return;
  }

  // Convert to numbers
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);

  let result;
  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number2 !== 0 ? number1 / number2 : "Error: Division by zero";
      break;
    default:
      result = "Invalid operation.";
  }

  // Display the result in the DOM
  const dynamicContentDiv = document.getElementById("dynamic-content");
  dynamicContentDiv.innerHTML += `<p>Calculator Result: ${result}</p>`;
}

// Greet User Function
function greetUser(name) {
  const greetingMessage = `Hello, ${name}! Welcome to the my JavaScript basics trials.`;
  const dynamicContentDiv = document.getElementById("dynamic-content");
  dynamicContentDiv.innerHTML += `<p>${greetingMessage}</p>`;
}

// Part 2: JavaScript Control Structures

// Check Voting Eligibility
function checkVotingEligibility() {
  const userAge = prompt("Enter your age:");

  if (isNaN(userAge) || userAge.trim() === "") {
    alert("Invalid input. Please enter a valid age.");
  } else {
    const age = parseInt(userAge);
    const message =
      age >= 18
        ? "You are eligible to vote!"
        : "You are not eligible to vote yet.";
    const dynamicContentDiv = document.getElementById("dynamic-content");
    dynamicContentDiv.innerHTML += `<p>${message}</p>`;
  }
}

// Display Numbers Using a Loop
function displayNumbers() {
  const numbersDiv = document.getElementById("dynamic-content");
  numbersDiv.innerHTML += "<ol>";
  for (let i = 1; i <= 10; i++) {
    numbersDiv.innerHTML += `<li>${i}</li>`;
  }
  numbersDiv.innerHTML += "</ol>";
}

// Part 3: Introduction to the DOM

// Change the Heading Text
document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  heading.textContent = "JavaScript in Action!";

  // Add Dynamic Content
  const dynamicContentDiv = document.getElementById("dynamic-content");
  dynamicContentDiv.innerHTML += `<p>This content was added dynamically using JavaScript.</p>`;
});

// Add Event Listeners for User Interaction
document.addEventListener("DOMContentLoaded", () => {
  // Buttons for User Interaction
  const greetButton = document.getElementById("greet-button");
  const calcButton = document.getElementById("calc-button");
  const voteButton = document.getElementById("vote-button");
  const loopButton = document.getElementById("loop-button");

  // Attach Functions to Buttons
  greetButton.addEventListener("click", () => greetUser("Coder"));
  calcButton.addEventListener("click", runCalculator);
  voteButton.addEventListener("click", checkVotingEligibility);
  loopButton.addEventListener("click", displayNumbers);
});
