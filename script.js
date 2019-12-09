//GET all elements and stor in vars
//ADD event listeners to color quares
//CREATE an array for the current sequence
//CREATE a var for score, current count of correct
//CREATE a function to flash color square
//CREATE a function to add a new color to the sequence and run the sequence
//CREATE an array to hold user responses
//CREATE a function to compare user response to current sequence
//CREATE a function to manage diplay area
//CREATE lose response
//CREATE restart
    //persist highscore

const gameContainer = document.querySelector("#game-container")
const scoreDisplay = document.querySelector("#score-display")
const currentStatus = document.querySelector("#current-status")
const startButton = document.querySelector("#start-button")
const highScoreDisplay = document.querySelector("#highscore-display")
const redButton = document.querySelector("#red")
const yellowButton = document.querySelector("#yellow")
const blueButton = document.querySelector("#blue")
const orangeButton = document.querySelector("#orange")
const greenButton = document.querySelector("#green")
const violetButton = document.querySelector("#violet")

let sequence = []
let currentCount = 0
let watching = true
 
startButton.addEventListener('click', startGame(evt))
gameContainer.addEventListener('click', handleClick(evt))

function startGame(evt) {
    console.log(click)
}

function handleClick(evt) {
    console.log(evt)
}