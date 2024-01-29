//js
//nav
// Function to change the background color of the navbar on scroll 
function handleScroll() {
  const navbar = document.querySelector('#old-menu');
  const scrollY = window.scrollY;

  // You can set a threshold value for when the background color changes
  // For example, change color when scrolled down by 100 pixels
  if (scrollY >= 100) {
      navbar.style.backgroundColor = 'white';
      navbar.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';

    
      //for transition nav
      navbar.style.transition= 'background-color 0.5s ease-in-out';
    
  
  } else {
      navbar.style.backgroundColor = 'transparent';
  
  }
}
//quiz
const quizData = [
  {
    question: "which of the following is not a JavaScript data type?",
    options: ["String", "Boolean", "Array", "Float"],
    answer: "Float"
  },
  {
    question: " What method is used to add a new element to the end of an array in JavaScript?",
    options: ["push()", "pop()", "unshift()", "shift()"],
    answer: "push()"
  },
  {
    question: "Which built-in method is used to return the length of a string in JavaScript?",
    options: ["length()", "count()", "Size()", "click()"],
    answer: "length()"
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsElement.innerHTML = "";
  currentQuizData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectOption(option, button));
    optionsElement.appendChild(button);
  });
}

function selectOption(selectedOption, selectedButton) {
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach(button => {
    button.disabled = true; // Disable all buttons after selection
    if (button === selectedButton) {
      button.classList.add("selected");
    } else if (button.textContent === selectedOption) {
      button.classList.add("other");
    }
  });
}

function showResult() {
  const currentQuizData = quizData[currentQuestion];
  resultElement.innerHTML = `Correct answer: ${currentQuizData.answer}`;
}

submitButton.addEventListener("click", () => {
  showResult();
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    submitButton.disabled = true;
  }
});

loadQuestion();
 