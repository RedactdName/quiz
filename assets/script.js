//Arrays 
var questions = [
    {
        question: "1.What is the capital city of Alaska?",
        choices: ['Anchorage', 'Juno', 'Kenai', 'Fairbanks'],
        answer: "Juno"
    },
    {
        question: "2.What year was the first Barbie doll ?",
        choices: ['1957', '1958', '1959', '1960'],
        answer: "1959"
    },
    {
        question: "3.What is CSS and acronym for? ",
        choices: ['Cascade Sensory Stressors', 'Covering Stylized Stuff', 'Come Style Stuff', 'Cascading Style Sheets'],
        answer: "Cascading Style Sheets"
    },
    {
        question: "4.What is the ultimate answer to the great question of life?",
        choices: ['42', '24', 'Binary', 'Foolishness'],
        answer: "42"
    },
    {
        question: "5.Who shot first?",
        choices: ['Greedo', 'Luke', 'Both', 'Han'],
        answer: "Han"
    }
]
var qIndex = 0

//Variables
const timerEl = document.getElementById("countdown")
const intro = document.getElementById("intro")
// const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const questionsEl = document.getElementById("questions")
const choicesEl = document.getElementById("choices")
const initialsEl = document.getElementById("initials")
const submitEl = document.getElementById("submit")
const high = document.getElementById("scoreContainer")
var startBtn = document.querySelector("#start-btn")
var timer;
var timeLeft = 15 * questions.length
//event listener
startBtn.addEventListener("click", function () {
    //hide intro
    intro.classList.add("hidden")
    questionsEl.classList.remove("hidden")
    timer = setInterval(clock, 1000)
    timerEl.textContent = timeLeft
    getQuestion()
})
//function 
// start timer for the clock (function)
// create clock function()
function clock() {
    timeLeft--;
    timerEl.textContent = timeLeft

    if (timeLeft <= 0) {
        endGame()
    }
}

function endGame() {
    clearInterval(timer)
    timerEl.textContent = timeLeft
    // identify where on html that I need to unhide the results
    results.classList.remove("hidden")
    var finalScore = document.getElementById("score")
    finalScore.textContent = timeLeft
    // show final #score = remaining time
    
    
    // hide questions container
    questionsEl.classList.add("hidden")
}
//call out second function
function getQuestion() {
    var currentQ = questions[qIndex]
    question.textContent = currentQ.question

    choicesEl.innerHTML = "";
    for (let i = 0; i < currentQ.choices.length; i++) {
        var choice = currentQ.choices[i]
        var choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = i + 1 + ". " + choice
        choicesEl.appendChild(choiceBtn)

    }

}
choicesEl.onclick = answerChoice;
function answerChoice(e) {
    var buttonHtml = e.target;
    if (!buttonHtml.matches(".choice")) {
        return
    }
    if (buttonHtml.value !== questions[qIndex].answer) {
        timeLeft -= 15
        if (timeLeft < 0) {
            timeLeft = 0
        }
        timerEl.textContent = timeLeft    
    }
    qIndex++
        if (timeLeft <= 0|| qIndex === questions.length) {
            endGame()  
            
        } else {
            getQuestion()
        }
}
function validateEnter(e){
    if (e.key === "Enter") {
        saveHighscores()
    }
}
function saveHighscores(){
    var initials = initialsEl.value.trim()
    if (initials !== "") {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || []    
    }
    var scoreBoard = {
        highScore: timeLeft, 
        initials: initials,
    }
    highScores.push(scoreBoard)
    localStorage.setItem("highScores", JSON.stringify(highScores))
    displayHighscore()    
}
function displayHighscore(){
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [] 
    results.classList.add("hidden")
    high.classList.remove("hidden")
    highScores.sort(function(a,b){
        return b.highScore - a.highScore
    }) 
    for (let i = 0; i < highScores.length; i++) {
        var liTag = document.createElement("li")
        high.textContent = highScores[i].initials + "-" + highScores[i].highScore;
        high.appendChild(liTag)

    }

}
submitEl.onclick = saveHighscores;
initialsEl.onkeyup = validateEnter
    // create 2nd fucntion() -- display a question & process a for loop for choices to display as buttons
    // btns.forEach(btn => {
        //     //event listener to make questions appear/disapper individually and consecutively
        //unhide questions
        //     btn.addEventListener('click', event => {
            //         alert(event.target.textContent);
            //         questionCounter++
            //         if (questionCounter == 1) {
                //             question1.classList.add("hidden")
                //             question2.classList.remove("hidden")
//         }
//         if (questionCounter == 2) {
//             question2.classList.add("hidden")
//             question3.classList.remove("hidden")
//         }
//         if (questionCounter == 3) {
//             question3.classList.add("hidden")
//             question4.classList.remove("hidden")
//         }
//         if (questionCounter == 4) {
//             question4.classList.add("hidden")
//             score.classList.remove("hidden")
//         }
//     });
