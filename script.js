var timeEl  = document.querySelector(".time");

var secondsLeft = 45;

function setTime(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "Timer";

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            
        }

    },1000);
}
setTime();


// Questions and answers

var questions = [
    {
        Question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        Question: "The condition in an if / else statment is enclosed within _____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        answer: "parentheses"
    },
    {
        Question: "What does the following expression return? '!false'",
        choices: ["null", "true", "undefined", "false"],
        answer: "true"
      },
      {
        Question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    }

];
