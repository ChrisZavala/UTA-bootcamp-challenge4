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
        answer: "1. Object-Oriented " 
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
    //  Format for questions???
        // Object that contains {question: string, Choices: array, answer: string}
        // Display question - loop
        //  append question
        // append choices array

// user selects an answer(button,radio,checkboxes)data-answer = ""
    //  click event is on the parent container
    //  how to know which element was clicked(event.target)
    // if the answer is correct display next question access array of questions object 
    // if answer is incorrect add 15 seconds to score and display next question

    //  When all questions are answered display form to submit initials
    //  save form values score and initials to local STrorage

//  change to highscores HTML
    //  read values from localstorage
    //  append score values to page

var start = document.querySelector("#start-quiz");
var scoreShown = document.querySelector("#scorebanner");
var submitBtn = document.querySelector("#submitscore");
var highScoreBtn = document.querySelector("#high-scores");
var scoresDiv = document.querySelector("#high-scores-container");
var count = 0;
var totalPoints = 0;
var totalTime = 60;
var highscores;
var lastQuestion = false;