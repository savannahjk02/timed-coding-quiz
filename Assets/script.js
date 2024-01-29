// timer section
//timer variables
var timeEl = document.querySelector(".time");
var secondsLeft = 76;
var startButton = document.querySelector(".quiz-button");
var endEl = document.querySelector(".end-quiz");
var displayArea = document.getElementById('quiz-container');

// timer function
function startTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
      displayArea.style.display = "none";
      endEl.textContent = "All Done!";
    }
  }, 1000);
}

// time is up message
function sendMessage() {
  timeEl.textContent = "You're Time is up!";
}

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
    correctAnswer: 'c'
  },
  {question: 'The condition in an if/else statement is enclosed within _______.',
    answers: {
      a: 'quotes',
      b: 'curly brackets',
      c: 'parentheses',
      d: 'square brackets'
    },
    correctAnswer: 'c'
  },
  {question: 'Arrays in JavaScript can be used to store ________.',
    answers: {
      a: 'numbers and strings',
      b: 'other arrays',
      c: 'booleans',
      d: 'all of the above'
    },
    correctAnswer: 'd'
  },
    {question: 'String values must be enclosed within ________ when being assigned to variables.',
      answers: {
        a: 'commas',
        b: 'curly brackets',
        c: 'quotes',
        d: 'parentheses'
      },
      correctAnswer: 'c'
  },
  {question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: {
      a: 'JavaScript',
      b: 'terminal/bash',
      c: 'for loops',
      d: 'console.log'
    },
    correctAnswer: 'd'
  },
];

// calling the functions
startButton.addEventListener("click", function() {
  startTime();
  clear();
  showQuestion(0);
});

// Function to show a question
function showQuestion(questionIndex) {

  // Construct the HTML for the question and answers
  var questionHTML = '<p>' + questionsArray[questionIndex].question + '</p>';
  questionHTML += '<ul class="answers-buttons">';
  for (var key in questionsArray[questionIndex].answers) {
    questionHTML += '<li><button class="answers-button" data-answer="' + key + '">' + questionsArray[questionIndex].answers[key] + '</button></li>';
  }
  questionHTML += '</ul>';

  // Update the display area with the question HTML
  displayArea.innerHTML = questionHTML;

  
  // Attach click event listeners to answer buttons
  var answerButtons = document.querySelectorAll('.answers-button');
  answerButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var selectedAnswer = button.getAttribute('data-answer');
      var correctAnswer = questionsArray[questionIndex].correctAnswer;
      var resultEl = document.querySelector(".result");
      

      // Check if the selected answer is correct
      if (selectedAnswer === correctAnswer) {
        // console.log('Correct answer selected:', selectedAnswer);
        resultEl.textContent = "Correct!";
      } else {
        // Handle incorrect answer logic (if needed)
        // console.log('Incorrect answer selected:', selectedAnswer);
        resultEl.textContent = "Wrong!";
      }
        // Move to the next question (if available)
        if (questionIndex < questionsArray.length - 1) {
          showQuestion(questionIndex + 1);
        } else {
          // Quiz is completed
          // console.log('Quiz completed!');
          displayArea.style.display = "none";
          endEl.textContent = "All Done!";
        }
      
    });
  });
}

// clear start page html to start quiz
function clear() {
  var startPage = document.getElementById("start-page");
  startPage.style.display = "none";
}