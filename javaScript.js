var questions = [
    {
        question: "What does it mean to socail distance?",
        choices: ["High five everyone you see ", "Stay 6 feet apart", "Hide in a corner"],
        answer: "Stay 6 feet apart"
    },
    {
        question: "What should you do to stay in shape?",
        choices: ["Eat all the food in the fridge", "Work out at home", "Cry"],
        answer: "Work out at home"
    },
    {
        question: "Can you leave your home?",
        choices: ["Only if necessary ", "Wait there's a lock down?", "Any time"],
        answer: "Only if necessary"
    },
    {
        question: "How much sleep should you get?",
        choices: ["What is sleep?", "8 hours", "16 hours"],
        answer: "8 hours"
    },
    {
        question: "What is the best way to spend this extra time we have?",
        choices: ["Do nothing and stare at a wall", "Plan how you are going to take over the world", "Learn a new skill or hobbie"],
        answer: "Learn a new skill or hobbie"
    },
    
]
var Q = 0;



var startScreenEl = document.getElementById("start-screen");
var quizScreenEl = document.getElementById("quiz-screen");
var endScreenEl = document.getElementById("end-screen");
var questionTitleEl = document.getElementById("question-title");
var choicesEl = document.getElementById("choices");

var startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", init);

function init() {
    
    startScreenEl.setAttribute("class", "hide");
    quizScreenEl.removeAttribute("class", "hide");
    displayQuestion();
};
function displayQuestion() {
    questions.innerHTML = "";

    var currentQuestion = questions[Q];
   
    questionTitleEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
    
    currentQuestion.choices.forEach(function(choice) {
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute('class', "choice");
        buttonEl.setAttribute("value", choice);

        buttonEl.textContent = choice;
        buttonEl.onclick = questionClick;
        choicesEl.appendChild(buttonEl);


    })
}

function questionClick() {
    //add game logic
    console.log(this.value);

    if(this.value !== questions[Q].answer) {
        console.log("wrong");
        //show right or wrong on screen.
        //penalize our timer
    } else {
        console.log("correct");
        //display right on screen 
        //add to timer
    }
    Q++;
    if(Q === questions.length) {
        endGame();
    } else {
    displayQuestion();
    }
};

function endGame() {
    alert("end game");
    startScreenEl.removeAttribute("class", "hide");
    
    
};
