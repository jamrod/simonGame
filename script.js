
//Get HTML elements
const gameContainer = document.querySelector("#game-container")
const scoreDisplay = document.querySelector("#score-display")
const currentStatus = document.querySelector("#current-status")
const startButton = document.querySelector("#start-button")
const highScoreDisplay = document.querySelector("#highscore-display")
const gameDivs = document.querySelectorAll(".game-buttons")
const closeButton = document.querySelector("#close")
const modal = document.querySelector("#modal")

//Initialize variables
let buttonArray = [] //will hold all the button objects
let sequence = [] //random generated sequence that player must repeat
let currentCount = 0 //players current place in the sequence
let currentScore = 0 //score
let watching = true //boolean used to stop user input during sequence
let highScore = 0 //best score of current browser session
let useModal = true //boolean to trigger modal if start not clicked

//event listeners
startButton.addEventListener('click', evt => {startGame(evt)})
closeButton.addEventListener('click', closeModal)

//create class to manage game buttons
class GameButton {
    constructor(tag){
        this.tag = tag
        this.div = document.querySelector(`#${this.tag}`)
    }
    flashButton() {
        this.div.style.backgroundColor = this.tag
        this.div.classList.add("shadow")
        setTimeout(clearButton, 650, this.div)
    }

}

//instantiate each button, link to DOM and add event listener
 gameDivs.forEach (button => {
    tag = button.id
    newButton = new GameButton(tag)
    buttonArray.push(newButton)
    button.addEventListener('click', evt => {handleClick(evt)})
 })

 //start the game, run the initial sequence, change to restart button, clear variables on restart
function startGame(evt) {
    startButton.textContent = "Restart"
    sequence = []
    currentScore = 0
    scoreDisplay.textContent = currentScore
    useModal = false
    runSequence()
}

//handle clicks, evaluate player input against sequence
function handleClick(evt) {
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
            currentStatus.textContent = "Got it!"
            setTimeout(runSequence, 2000)
        }
    } else {
        loss()
    }
}

//flash the button
function callFlash(obj){
    obj.flashButton()
}

//clear button backgrounds so they appear to flash
function clearButton(obj) {
    obj.style.backgroundColor = "white"
    obj.classList.remove("shadow")
}

//add a new square to the sequence and flash them in order
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

//clears the "watch" state so that user input is allowed and sets text to "repeat"
function clearWatch() {
    watching = false;
    currentStatus.textContent = "Repeat"
}

//loss state and text
function loss(){
    gameContainer.classList.add("loss")
    setTimeout(function () {gameContainer.classList.remove("loss")}, 650)
    watching = true
    currentStatus.style.fontSize = "medium"
    currentStatus.textContent = "Sorry, try again"
    if (currentScore > highScore) {
        highScore = currentScore
        let allTimeHighScore = localStorage.getItem('score')
        if (highScore > allTimeHighScore) {
        localStorage.setItem('score', highScore)
        currentStatus.textContent = "New All Time High!"
        } else {
            currentStatus.textContent = "New High Score!"
        }
    }
    highScoreDisplay.textContent = highScore
    getAllTime()
}

//get all time high score if stored locally, called on load
function getAllTime() {
    if (localStorage.getItem('score')) {
        let allTimeHighScore = localStorage.getItem('score')
        let allTime = document.querySelector('#all-time')
        allTime.textContent = allTimeHighScore
    }
}
getAllTime()

//open a modal explainer
function openModal() {
    if (useModal) {
        modal.style.display = 'block'
    }
}

//close the modal
function closeModal() {
    modal.style.display = 'none'
}

//open modal automatically if game hasn't started
setTimeout(openModal, 6000)

//flash start button on load to draw the eye to it
function flashStart() {
    if (useModal) {
    startButton.style.backgroundColor = 'red'
    setTimeout(clearButton, 400, startButton)
    }
}
setTimeout(flashStart,1750)