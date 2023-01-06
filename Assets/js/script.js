// User is presented with 5 questions - array of objects
//I know I did more than the required question in my array so :p
var questions = [
    { 
        question: "Arrays in Java Script can be used to store what type of data?",
        choices: ["1. Numbers", "2. Boolean", "3. Strings", "4. All of the above"], 
        answer: "4. All of the above"

    },
    {
        question: "JavaScript is an _______ language?",
        choices: ["1. Object-Oriented", "2. Object-Based", "3. Procedural", "4. None of the above"], 
        answer: "1. Object-Oriented" 
    },
    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        choices: ["1. var", "2. let", "3. Both A and B", "4. None of the above"], 
        answer: "3. Both A and B"
    },
    {
        question: "Which of the following methods can be used to display data in some form using JavaScript?",
        choices: ["1. document.write()", "2. console.log()", "3. window.alert()", "4. All of the above"], 
        answer: "4. All of the above"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in JavaScript?",
        choices: ["1. stringify()", "2. parse()", "3. convert()", "4. None of the above"], 
        answer: "1. stringify()"
    },
    {
        question: "Which of the following is not a JavaScript framework? ",
        choices: ["1. Node", "2. Vue", "3. React", "4. Cassandra"], 
        answer: "4. Cassandra"
    },
    {
        question: "How do we write a comment in JavaScript?",
        choices: ["1. /* */", "2. //", "3. #", "4. $$"], 
        answer: "2. //"
    }
];

//starting from the top of the HTML and grabbing the variables of the elements
var viewHighScoresEl = document.getElementById("high-scores");
var timeEl = document.querySelector("#timer");
var containerStartEl = document.getElementById("container");
var btnStartEl = document.querySelector("#start-quiz");
var containerQuestionEl = document.getElementById("questioncontainer");
var questionEl = document.getElementById("questions");
var answerButtonsEl = document.getElementById("answerbuttons");
var containerEndEl = document.getElementById("endcontainer");
var containerScoreBannerEl = document.getElementById("scorebanner");
var containerFormInitialsEl = document.getElementById("initalsbox");
var containerHighScoresEl = document.getElementById("high-scores-container");
var highScoresListEl = document.getElementById("high-scores-list");
var btnGoBackEl = document.querySelector("#goback");
var btnClearHighScores = document.querySelector("#clearhighscores");
var correctEl = document.getElementById("Correct");
var wrongEl = document.getElementById("Wrong");
var TotalPoints = 0;
var EndGame;
var timeLeft;
timerEl.innerText = 0;
var highScoresArr = [];
var arrayShuffleQuestions;
var QuestionIndex = 0;

btnStartEl.addEventListener("click", startQuiz);

var startQuiz = function() {
    containerStartEl.classList.add("hide");
    containerStartEl.classList.remove("show");
    containerQuestionEl.classList.remove("hide");
    containerQuestionEl.classList.add("show");
    arrayShuffleQuestions = questions.sort(() => Math.random() -0.5);

        interval()
        generateQuestion()
}

var generateQuestion = function() {
    showQuestion(arrayShuffleQuestions[QuestionIndex])
    resetAnswer()
}

var resetAnswer = function () {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    };
};

var showQuestion = function (index) {
    questionEl.innerText = index.question
    for (var i = 0, i < index.choices.length; i++) {
        var answerbutton = document.createElement("button")
        answerbutton.innerText = index.choices[i].choices
        answerbutton.classList.add("btn")
        answerbutton.classList.add('answerbuttons')
        answerbutton.addEventListener("click", checkAnswer)
        answerButtonsEl.appendChild(answerbutton)
    }


};

