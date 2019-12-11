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
const gameDivs = document.querySelectorAll(".game-buttons")

let buttonArray = []
let sequence = []
let currentCount = 0
let currentScore = 0
let watching = true
let highScore = 0

startButton.addEventListener('click', evt => {startGame(evt)})
// gameContainer.addEventListener('click', evt => {handleClick(evt)})

class GameButton {
    constructor(tag){
        this.tag = tag
        this.div = document.querySelector(`#${this.tag}`)
    }
    flashButton() {
        this.div.style.backgroundColor = this.tag
        setTimeout(clearButton, 650, this.div)
    }

}

 gameDivs.forEach (button => {
    tag = button.id
    newButton = new GameButton(tag)
    buttonArray.push(newButton)
    button.addEventListener('click', evt => {handleClick(evt)})
 })

function startGame(evt) {
    startButton.textContent = "Restart"
    sequence = []
    currentScore = 0
    scoreDisplay.textContent = currentScore
    runSequence()
}

function handleClick(evt) {
    // console.log(evt)
    if (watching) {return}
    let id = parseInt(evt.target.dataset.number)
    if (id === sequence[currentCount]) {
        buttonArray[id].flashButton()
        currentCount++
        currentStatus.textContent = "Good!"
         if (currentCount > currentScore) {
            currentScore = currentCount}
        scoreDisplay.textContent = currentScore
        if (currentCount === sequence.length) {
            setTimeout(runSequence, 2000)
        }
    } else {
        loss()
    }
}

function clearButton(obj) {
    obj.style.backgroundColor = "white"
}

function runSequence() {
    currentCount = 0
    currentStatus.textContent = "Watch"
    currentStatus.style.fontSize = "x-large"
    watching = true
    let nextButton = Math.floor(Math.random() * 6)
    sequence.push(nextButton)
    let delay = 0
    for (i=0; i<sequence.length; i++){
        let item = buttonArray[sequence[i]]
        if (i>0) {
            delay += 1650
            setTimeout(callFlash, delay, item )
        } else {
            item.flashButton()
        }
        if (i === sequence.length - 1) {
            delay += 1000
            setTimeout(clearWatch, delay)
        }
    }

}

function callFlash(obj){
    obj.flashButton()
}

function clearWatch() {
    watching = false;
    currentStatus.textContent = "Repeat"
}

function loss(){
    watching = true
    currentStatus.style.fontSize = "medium"
    currentStatus.textContent = "Sorry, try again"
    if (currentScore > highScore) {
        highScore = currentScore
        let allTimeHighScore = localStorage.getItem('score')
        if (highScore > allTimeHighScore)
        localStorage.setItem('score', highScore)
    }
    highScoreDisplay.textContent = highScore
    getAllTime()
}

function getAllTime() {
    if (localStorage.getItem('score')) {
        let allTimeHighScore = localStorage.getItem('score')
        let allTime = document.querySelector('#all-time')
        allTime.textContent = allTimeHighScore
    }
}
getAllTime()