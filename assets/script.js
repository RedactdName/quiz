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
var timer = document.querySelector(".timer");
var startBtn = document.querySelector(".start-btn");
var question1 = document.querySelector(".card1");
var question2 = document.querySelector(".card2");
var question3 = document.querySelector(".card3");
var question4 = document.querySelector(".card4");
var questions = [question1, question2, question3, question4]
var questionCounter = 0;
var score = document.querySelector(".score");
var secondsLeft = 45;

//Functions
// function timer 
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }


//Special Functions
startBtn.addEventListener("click", function () {
    question1.classList.remove("hidden")
    startBtn.classList.add("hidden")
})

const btns = document.querySelectorAll('.ans', 'answer')

// When player clicks start button first question appears
btns.forEach(btn => {
    //event listener to make questions appear/disapper individually and consecutively
    btn.addEventListener('click', event => {
        alert(event.target.textContent);
        questionCounter++
        if (questionCounter == 1) {
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