# simonGame

Memory game

Test your short-term memory!
There are six colored buttons on the screen which will "flash" in a specific order, the player must repeat that order to score otherwise the sequence starts over and score reverts to 0. User input will be paused while the sequence is displayed and the word "Watch" will display beneath the playing area. The word "Repeat" will be displayed beneath the playing area when the sequence is complete and user input is active again. The sequence starts with one button and increases by one each time the player repeats it correctly. The display area will track the current score and will persist a "Highscore" for the browser session and an "All Time Highscore" per browser.

Play game here! faultyStars.org[www.faultystars.org]

## Project Description

Create simon memory game
Watch a sequence of colored squares flash then repeat the sequence by clicking on the squares in the same order. App will track whether you followed the sequence properly. Sequence will increase by 1 on every iteration. Score will track how long the sequence was that you last got correctly.

Gold, mobile responsive, persist a highscore, rules pop-up at beginning

## Priority Matrix

| Item           | Priority | Time Estimate | Actual |
| -------------- | -------- | ------------- | ------ |
| Plan           | H        | 2hr           | 2hr    |
| HTML wireframe | H        | 2hr           | 1hr    |
| JS basic game  | H        | 4hr           | 4hr    |
| JS timers      | H        | 4hr           | 4hr    |
| CSS            | M        | 8hr           | 4hr    |
| Gold           | L        | 8 hr          | 8hr    |

## Wireframes

![Imgur](https://i.imgur.com/RAi30s5.png?1)

## Game Components

### Landing Page

Gold version, When navigating to the page a pop-up which explains game play will appear. Modal

### Playing The Game

There are 6 colored buttons on the screen which will "flash" in a specific order, the player must repeat that order to score otherwise the seaquence starts over and score reverts to 0

### Game Reset

A user can hit a reset button to start over or start again

## Functional Components

The basic board is created with HTML and styled in CSS
Flashing the squares is accomplished by changing the styles on the divs then reverting back after a timer is elapsed, less than a second. User input will be paused while the sequence is displayed and the word "Watch" will display beneath the playing area. The word "Repeat" will be displayed beneath the playing area when the sequence is complete and user input is active again. The display area will track the current score and will persist a high score. This game logic will be created with Javascript.
Flashing buttons is achieved with setTimeout, background-color change and box-shadow change.

## Code Snippet

snippet of my solution to the timing issue

```
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
```

## Issues and Resolutions

- **Roadblocks-**
  'this' connection on a setTimeout - clearing all buttons everytime a button is flashed
  setTimeout is a window function so you can't use the this keyword to tie the function to an object. I had to set up functions in the top-level scope and pass the object
- **Wins-**
  Figured out a work around for both issues I encountered with setTimeout.
  Learned about modals and local storage.
