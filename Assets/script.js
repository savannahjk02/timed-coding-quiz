// timer section
//timer variables
var timeEl = document.querySelector(".time");
var secondsLeft = 10; //75
var button = document.querySelector(".quiz-button");

// timer function
function startTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

// time is up message
function sendMessage() {
  timeEl.textContent = "You're Time is up!";
}

// calling the functions
button.addEventListener("click", () => {
  startTime();
  clear();
  answersButtons();
});

// quiz section
// array: [questions, answers, correct answers]
var questionsArray = [
  {question: 'Commonly used data types DO NOT include:',
    answers: {
      a: 'strings',
      b: 'booleans',
      c: 'alerts',
      d: 'numbers'
    },
    correctAnswer: 'alerts'
  },
  {question: 'The condition in an if/else statement is enclosed within _______.',
    answers: {
      a: 'quotes',
      b: 'curly brackets',
      c: 'parentheses',
      d: 'square brackets'
    },
    correctAnswer: 'parentheses'
  },
  {question: 'Arrays in JavaScript can be used to store ________.',
    answers: {
      a: 'numbers and strings',
      b: 'other arrays',
      c: 'booleans',
      d: 'all of the above'
    },
    correctAnswer: 'all of the above'
  },
    {question: 'String values must be enclosed within ________ when being assigned to variables.',
      answers: {
        a: 'commas',
        b: 'curly brackets',
        c: 'quotes',
        d: 'parentheses'
      },
      correctAnswer: 'quotes'
  },
    {question: 'A very useful tool used during devekopment and debugging for printing content to the debugger is:',
      answers: {
        a: 'JavaScript',
        b: 'terminal/bash',
        c: 'for loops',
        d: 'console.log'
      },
      correctAnswer: 'console.log'
  },
];
// clear start page html to start quiz
function clear() {
  var startPage = document.getElementById("start-page");
  startPage.style.display = "none";
}
// display answer buttons
function answersButtons() {
  var answersButtons = document.querySelectorAll(".answers-buttons");
  answersButtons.forEach(function(button) {
    button.style.display = "block";
  });
};

// Attach click event listeners to buttons
for (let i = 0; i < questionsArray.length; i++) {
  button.addEventListener('click', function() {
    showQuestion(i);
  });
}

// Function to show a question
function showQuestion(questionIndex) {
  // Get the display area
  var displayArea = document.getElementById('quiz-container');

  // Construct the HTML for the question and answers
  var questionHTML = '<p>' + questionsArray[questionIndex].question + '</p>';
  questionHTML += '<ul>';
  for (var key in questionsArray[questionIndex].answers) {
    questionHTML += '<li><button>' + key + ': ' + questionsArray[questionIndex].answers[key] + '</button></li>';
  }
  questionHTML += '</ul>';

  // Update the display area with the question HTML
  displayArea.innerHTML = questionHTML;
}