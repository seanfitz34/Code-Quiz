// delcare all teh global variables
var timeEl = document.querySelector(".time");
var home = document.querySelector("#home");
var playEl = document.querySelector("#start");
var questionContainer = document.querySelector("#questions");
var questionsText = document.querySelector("#questionText");
var questionButtons = document.querySelector("#questionButtons");
var end = document.querySelector("#end");
var finalScore = document.querySelector("#finalScore");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");

var secondsLeft = 45;
var index = 0;

// Questions and answers

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statment is enclosed within _____.",
    choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "What does the following expression return? '!false'",
    choices: ["null", "true", "undefined", "false"],
    answer: "true",
  },
  {
    question: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
];

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Timer: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
function startGame() {
  timeEl.textContent = "Timer: " + secondsLeft;
  setTime();
  //this will need to hide the first container and show the question container and then run the function that will display the questions
  home.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  displayQs();
}

function displayQs() {
  // need to display the question text from the question array.need tosingle out an object from the question array first.
  var questionObj = questions[index];
  questionsText.textContent = questionObj.question;

  questionButtons.innerHTML = "";
  //  need to loop over the choices array
  for (var i = 0; i < questionObj.choices.length; i++) {
    // create buttons give the their content and append them to the page
    var btn = document.createElement("button");
    btn.textContent = questionObj.choices[i];
    btn.setAttribute("class", "btn");
    btn.setAttribute("value", questionObj.choices[i]);

    btn.addEventListener("click", checkAnswers);
    questionButtons.append(btn);
  }
}

function checkAnswers(event) {
  if (questions[index].answer !== event.target.value) {
    secondsLeft = secondsLeft - 5;
    timeEl.textContent = "Timer: " + secondsLeft;
  }

  index++;

  if (questions.length === index) {
    gameOver()
  } else {
    displayQs();
  }
}

function gameOver(){
  end.classList.remove("hidden");
  questionContainer.classList.add("hidden");
}

playEl.addEventListener("click", startGame);
