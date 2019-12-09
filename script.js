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
// const redButton = document.querySelector("#red")
// const yellowButton = document.querySelector("#yellow")
// const blueButton = document.querySelector("#blue")
// const orangeButton = document.querySelector("#orange")
// const greenButton = document.querySelector("#green")
// const violetButton = document.querySelector("#violet")

let buttonArray = []
let sequence = []
let currentCount = 0
let watching = true

startButton.addEventListener('click', evt => {startGame(evt)})
// gameContainer.addEventListener('click', evt => {handleClick(evt)})

class GameButton {
    constructor(tag){
        this.tag = tag
        this.div = document.querySelector(`#${this.tag}`)
    }
    flashButton() {
        console.log(this.div + "flash " + this.tag)
        this.div.style.backgroundColor = this.tag
        setTimeout(clearButtons, 1000)
    }

}

 gameDivs.forEach (button => {
    tag = button.id
    newButton = new GameButton(tag)
    buttonArray.push(newButton)
    button.addEventListener('click', evt => {handleClick(evt)})
 })

function startGame(evt) {
    console.log(evt)
    flashSquare()
}

function handleClick(evt) {
    console.log(evt)
    let id = evt.target.dataset.number
    buttonArray[id].flashButton()
}

function clearButtons() {
    gameDivs.forEach(button => button.style.backgroundColor = "white")
}
// function clearSquare() {
//     redButton.style.backgroundColor = "white"
// }

// function flashSquare(){
//     redButton.style.backgroundColor = "red"
//     setTimeout(clearSquare, 1000)
// }
// redButton.style.backgroundColor = "red"