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
        this.str = `"#{this.tag}"`
        this.div = document.querySelector(this.str)
    }
    flashButton() {
        this.div.backgroundColor = `"${this.tag}"`
        setTimeout(this.clearButton, 1000)
    }
    clearButton() {
        this.div.backgroundColor = "white"
    }
}

 gameContainer.childNodes.forEach (button => {
    tag = button.id
    console.log(tag)
    newButton = new GameButton(tag)
    buttonArray.push(newButton)
 })

function startGame(evt) {
    console.log(evt)
    flashSquare()
}

function handleClick(evt) {
    console.log(evt)

}

// function clearSquare() {
//     redButton.style.backgroundColor = "white"
// }

// function flashSquare(){
//     redButton.style.backgroundColor = "red"
//     setTimeout(clearSquare, 1000)
// }
// redButton.style.backgroundColor = "red"