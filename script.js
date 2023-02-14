'use strict';

let ai = Math.trunc(Math.random()*20)+1
let highscore = 0
let score = 20
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener("click", () => {
    const guess = Number(document.querySelector('.guess').value)
    // No input Number
    if(!guess){
        displayMessage("⛔ no number ⛔")
    }
    else{
        // when the guess is correct 
        if(guess === ai){
            document.querySelector('body').style.backgroundColor = '#60b347'
            displayMessage("You Won")
            document.querySelector('.number').textContent = ai
            document.querySelector('.highscore').textContent = highscore>score? score:highscore

        // when guess is wrong
        }else if(guess !== ai){
            if(score > 1){
                displayMessage(guess<ai? "Too low📉 ":"Too high📈")
                score--
                document.querySelector('.score').textContent = score
            }else{
                document.querySelector('body').style.backgroundColor = 'red'
                disaplayMessage('You lost the game!')
            }
        }
    }
}
)


document.querySelector('.btn.again').addEventListener('click',() =>{
    score = 20
    ai = Math.trunc(Math.random()*20)+1

    document.querySelector('.guess').value = " "
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').textContent = "?"

})