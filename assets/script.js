//Arrays 
var questions = [ 
    {
    question: "1.What is the capital city of Alaska?",
    choices: ['Anchorage', 'Juno', 'Kenai', 'Fairbanks'],
    answer: "Juno"
},
{
    question: "2.What year ws the first Barbie doll ?",
    choices: ['1957', '1958', '1959', '1960'],
    answer: "1959"
},
{
    question: "3. ?",
    choices: ['', '', '', ''],
    answer: ""
},
{
    question: "4.?",
    choices: ['', '', '', ''],
    answer: ""
},
{
    question: "5.What is the capital city of Alaska?",
    choices: ['Anchorage', 'Juno', 'Kenai', 'Fairbanks'],
    answer: "Juno"
}
]

//Variables
const timer = document.getElementById("countdown")
const intro = document.getElementById("intro")
// const quiz = document.getElementById("quiz")
const question = document.getElementById("question")
const choices = documetn.getElementById("choices")
const results = document.getElementById("score")
// const ansA = document.getElementById("A")
// const ansB = document.getElementById("B")
// const ansC = document.getElementById("C")
// const ansD = document.getElementById("D")
const high = document.getElementById("scoreContainer")
var startBtn = document.querySelector(".start-btn")

//event listener
startBtn.addEventListener("click", function () {
    //hide intro
    intro.classList.add("hidden")
    startBtn.classList.add("hidden")
})
//function 
//unhide questions
questions.classList.remove("hidden")
        // start timer for the clock (function)
    function clock() {
        
    }
 
    //call out second function
// create clock function()
// create 2nd fucntion() -- display a question & process a for loop for choices to display as buttons
