// User is presented with 5 questions - array of objects
//I know I did more than the required question in my array so :p
var questions = [
    { question: "Arrays in Java Script can be used to store what type of data?",
      answer: "4. All of the above", 
      choices: [{choice: "1. Numbers"}, {choice: "2. Boolean"}, {choice: "3. Strings"}, {choice: "4. All of the above"}]
    },

    { question: "JavaScript is an _______ language?",
      answer: "1. Object-Oriented", 
      choices: [{choice: "1. Object-Oriented"}, {choice: "2. Object-Based"}, {choice: "3. Procedural"}, {choice: "4. None of the above"}]
    },

    { question: "Which of the following keywords is used to define a variable in JavaScript?",
      answer: "3. Both A and B", 
      choices: [{choice: "1. var"}, {choice: "2. let"}, {choice: "3. Both A and B"}, {choice: "4. None of the above"}]
    },

    { question: "Which of the following methods can be used to display data in some form using JavaScript?",
      answer: "4. All of the above", 
      choices: [{choice: "1. document.write()"}, {choice: "2. console.log()"}, {choice: "3. window.alert()"}, {choice: "4. All of the above"}]
    },

    { question: "Which function is used to serialize an object into a JSON string in JavaScript?",
      answer: "1. stringify()", 
      choices: [{choice: "1. stringify()"}, {choice: "2. parse()"}, {choice: "3. convert()"}, {choice: "4. None of the above"}]
    },

    { question: "Which of the following is not a JavaScript framework?",
      answer: "4. Cassandra", 
      choices: [{choice: "1. Node"}, {choice: "2. Vue"}, {choice: "3. React"}, {choice: "4. Cassandra"}]
    },

    { question: "How do we write a comment in JavaScript?",
      answer: "2. //", 
      choices: [{choice: "1. /* */"}, {choice: "2. //"}, {choice: "3. #"}, {choice: "4. $$"}]
    },

    
];

//starting from the top of the HTML and grabbing the variables of the elements
var viewHighScoresEl = document.getElementById("high-scores");
var timerEl = document.querySelector("#timer");
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
var viewHighScoresEl = document.getElementById("high-scores");
var btnGoBackEl = document.querySelector("#goback");
var btnClearHighScores = document.querySelector("#clearhighscores");
var correctEl = document.getElementById("Correct");
var wrongEl = document.getElementById("Wrong");
var TotalPoints = 0;
var EndGame;
var timeLeft;
timerEl.innerText;
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
    timeLeft = 30;

    var timecheck = setInterval(function() {
        timerEl.innerText = timeLeft;
        timeLeft--;

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

var startOver = function() {
    containerHighScoresEl.classList.add("hide")
    containerHighScoresEl.classList.remove("show")
    containerStartEl.classList.remove("hide");
    containerStartEl.classList.add("show")
    containerScoreBannerEl.removeChild(containerScoreBannerEl.lastChild)
    QuestionIndex = 0
    EndGame = ""
    timerEl.textContent = 0
    TotalPoints = 0
    
    if (correctEl.className =  "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
}
//dang by switching the reset Answer part here in the showQuestion function I was not getting the buttons created ugh!
var generateQuestion = function() {
    resetAnswer()
    showQuestion(arrayShuffleQuestions[QuestionIndex])
    
}

var resetAnswer = function () {
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    };
};

var showQuestion = function (index) {
    questionEl.innerText = index.question
    console.log(index);
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement("answerbuttons")
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add("btn")
        answerbutton.classList.add("answerbtn")
        answerbutton.addEventListener("click", checkAnswer)
        answerButtonsEl.appendChild(answerbutton)
    }


}

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

    containerFormInitialsEl.reset();

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

var savedHighScores = function() {
    localStorage.setItem("HighScores", JSON.stringify(highScoresArr))

}

var loadHighScore = function() {
    var loadHighScore = localStorage.getItem("HighScores")
        if (!loadHighScore) {
            return false;
        }

        loadHighScore = JSON.parse(loadHighScore);
        loadHighScore = sort((a, b) => { return b.TotalPoints-a.TotalPoints})

        for (var i = 0; i < loadHighScore.length; i++) {
            var highscoreEl = document.createElement("li");
            highscoreEl.className = "high-scores";
            highscoreEl.innerText = loadHighScore[i].initials + " - " + loadHighScore[i].TotalPoints;
            highScoresListEl.appendChild(highscoreEl);
            highScoresArr.push(loadHighScore[i]);
        }
}

var showHighScores = function() {
    containerHighScoresEl.classList.remove("hide");
    containerHighScoresEl.classList.add("show");
    EndGame = "true"


    if (containerEndEl.className = "show") {
        containerEndEl.classList.remove("show");
        containerEndEl.classList.add("hide");
    }
    if (containerStartEl.className = "show") {
        containerStartEl.classList.remove("show");
        containerStartEl.classList.add("hide");
    }
    if (containerQuestionEl.className = "show") {
        containerQuestionEl.classList.remove("show");
        containerQuestionEl.classList.add("hide");
    }
    if (correctEl.className = "show") {
        correctEl.classList.remove("show");
        correctEl.classList.add("hide");
    }
    if (wrongEl.className = "show") {
        wrongEl.classList.remove("show");
        wrongEl.classList.add("hide");
    }
}

var clearScores = function() {
    highScoresArr = [];

    while (highScoresListEl.firstChild) {
        highScoresListEl.removeChild(highScoresListEl.firstChild);
    }
    localStorage.clear(highScoresArr);
}
loadHighScore()

btnStartEl.addEventListener("click", startQuiz)
containerFormInitialsEl.addEventListener("submit", highScore)
viewHighScoresEl.addEventListener("click", showHighScores)
btnGoBackEl.addEventListener("click", startOver)
btnClearHighScores.addEventListener("click", clearScores)

