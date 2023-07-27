/* Initial webpage opens with title and display of high scores
    insturcitonal prompt explains rules of game with start button to press
    card to right of screen lists top scores and initials 
When player clicks start button first question appears
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

let timer = document.querySelector ("timer");
let startBtn = document.querySelector ("start");
let questionEl = document.querySelector ("question");

