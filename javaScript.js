var questions = [
    {
        question: "What day is it?",
        choices: ["mon", "tues", "wed"],
        answer: "mon"
    },
    {
        question: "What week is it?",
        choices: ["mon", "tues", "wed"],
        answer: "mon"
    },
    {
        question: "What mon is it?",
        choices: ["mon", "tues", "wed"],
        answer: "mon"
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
}

function displayQuestion() {
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
}

function endGame() {
    alert("end game");
}
