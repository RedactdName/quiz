/* Initial webpage opens with title and display of high scores
    insturcitonal prompt explains rules of game with start button to press
    card to right of screen lists top scores and initials 
    create cards with question 
    randomizer to present questions
    first question displays after hitting start on prompt
    
    Four answer options appear and timer starts to count down
    create timer
    display 4 mulitple choice style answers
    create submit button
    
    Player answers question correctly and it moves on to the next question
    new card appears with a different question an 4 answers
    
    Player answers question incorrectly and the time gets deducted 
    prompt of incorrect answer
    time is deducted from remaining time left in quiz
    
    If player goes through all questions before timer runs out prompt players score 
    prompt announcing score
    
    When timer ends GAME OVER
    GAME OVER appears with score and prompt to add high score or start again
    
    Prompt to enter initials to add to high score list 
    */
//Variables
const timer = document.getElementById("countdown")
const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const ansA = document.getElementById("A")
const ansB = document.getElementById("B")
const ansC = document.getElementById("C")
const ansD = document.getElementById("D")
const high = document.getElementById("scoreContainer")
var startBtn = document.querySelector(".start-btn")

//Functions 
var questions = [ {
    question: "1.What is the capital city of Alaska?",
    choices: ['Anchorage', 'Juno', 'Kenai', 'Fairbanks'],
    correctOption: "b"
}]

var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
        //     } else if (timeLeft === 1) {
        //       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        //       timerEl.textContent = timeLeft + ' second remaining';
        //       timeLeft--;
    } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        clearInterval(timeInterval);
        //       // Call the `displayMessage()` function
        //       displayMessage();
    }
}, 450000);


//Special Functions
startBtn.addEventListener("click", function () {
    quiz.classList.remove("hidden")
    startBtn.classList.add("hidden")
})

const btns = document.querySelectorAll('.ans', 'answer')


// When player clicks start button first question appears
btns.forEach(btn => {
    //event listener to make questions appear/disapper individually and consecutively
    btn.addEventListener('click', event => {
        alert(event.target.textContent);
        questionCounter++
        
        (questionCounter == 1) {
            question1.classList.add("hidden")
            question2.classList.remove("hidden")
        }
        if (questionCounter == 2) {
            question2.classList.add("hidden")
            question3.classList.remove("hidden")
        }
        if (questionCounter == 3) {
            question3.classList.add("hidden")
            question4.classList.remove("hidden")
        }
        if (questionCounter == 4) {
            question4.classList.add("hidden")
            score.classList.remove("hidden")
        }
    });

});
//Logic