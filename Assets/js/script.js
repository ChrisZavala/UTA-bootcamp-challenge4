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
var answerButtonsEl = document.getElementById("#answerbuttons");
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
var timerEl = 0;
var highScoresArr = [];
var arrayShuffleQuestions;
var QuestionIndex = 0;


var startQuiz = function() {
    containerStartEl.classList.add("hide");
    containerStartEl.classList.remove("show");
    containerQuestionEl.classList.remove("hide");
    containerQuestionEl.classList.add("show");
    arrayShuffleQuestions = questions.sort(() => Math.random() -0.5);

        interval()
        generateQuestion()
}

var interval = function () {
    timeLeft = 60;

    var timecheck = setInterval(function() {
        timeEl.innerText = timeLeft;
        timeLeft--

        if (EndGame) {
            clearInterval(timecheck)
        }
        if (timecheck < 0) {
            showScore()
            timerEl.innerText = 0
            clearInterval(timecheck)
        }
    }, 1000)
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
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement("button")
        answerbutton.innerText = index.choices[i].choices
        answerbutton.classList.add("btn")
        answerbutton.classList.add('btn')
        answerbutton.addEventListener("click", checkAnswer)
        answerButtonsEl.appendChild(answerbutton)
    }


};

var answeredRight = function () {
    if (correctEl.className = "hide") {
        correctEl.classList.remove("hide")
        correctEl.classList.add("banner")
        wrongEl.classList.remove("banner")
        wrongEl.classList.add("hide")


    }
}

var answeredWrong = function () {
    if (wrongEl.className = "hide") {
        wrongEl.classList.remove("hide")
        wrongEl.classList.add("banner")
        correctEl.classList.remove("banner")
        correctEl.classList.add("hide")
    }
}

var checkAnswer = function (event) {
    var answerpicked = event.target
    if(arrayShuffleQuestions[QuestionIndex].answer === answerpicked.innerText) {
        answeredRight ()
        TotalPoints = TotalPoints + 5

    } else {
        answeredWrong()
        TotalPoints = TotalPoints - 5
        timeLeft = timeLeft -5;

    };

    QuestionIndex++
    if (arrayShuffleQuestions.length > QuestionIndex + 1) {
        generateQuestion()

    } else {
        EndGame = "true";
        showScore();
    }
}

var showScore = function() {
    containerQuestionEl.classList.add("hide");
    containerEndEl.classList.remove("hide");
    containerEndEl.classList.add("show");
    var displayScore = document.createElement("p");
    displayScore.innerText = ("Your Score is: "  + TotalPoints + "");
    containerScoreBannerEl.appendChild(displayScore);  
}

var highScore = function(event) {
    event.PreventDefault()
    var initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("Please Enter your Initials");
        return;
    }

    formSubmit.reset();

    var HighScore = {
        initials: initials, 
        TotalPoints: TotalPoints
    }

    highScoresArr.push(HighScore);
    highScoresArr.sore((a,b) => {return b.TotalPoints-a.TotalPoints});

    while (highScoresListEl.firstChild) {
        highScoresListEl.removeChild(highScoresListEl.firstChild)
    }
    for (var i = 0; i < highScoresArr.length; i++) {
        var highscoreEl = document.createElement("li");
        highscoreEl.className = "high-score";
        highscoreEl.innerHTML = highScoresArr[i].initials + " : " + highScoresArr[i].TotalPoints;
        highScoresListEl.appendChild(highscoreEl);
    }

    savedHighScores();
    showHighScores();
}


btnStartEl.addEventListener("click", startQuiz)