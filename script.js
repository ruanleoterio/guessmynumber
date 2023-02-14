'use strict';

let ai = Math.trunc(Math.random()*20)+1
let highscore = 0
let score = 20

document.querySelector('.check').addEventListener("click", () => {
    const guess = Number(document.querySelector('.guess').value)
    // No input Number
    if(!guess){
        document.querySelector('.message').textContent = "⛔ no number ⛔"
    }
    else{
        // when the guess is correct 
        if(guess === ai){
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.message').textContent = "You Won"
            document.querySelector('.number').textContent = ai
            document.querySelector('.highscore').textContent = highscore<score? score:highscore

        // when guess is too low
        }else if(guess < ai){
            if(score > 1){
                document.querySelector('.message').textContent =  "Too low"
                score--
                document.querySelector('.score').textContent = score
            }else{
                document.querySelector('body').style.backgroundColor = 'red'
                document.querySelector('.message').textContent = 'You lost the game!'
            }
        
        // when guess is too high
        }else if(guess > ai){
            if (score > 1){
            document.querySelector('.message').textContent =  "Too high"
            score--
            document.querySelector('.score').textContent = score
            }else{
                document.querySelector('body').style.backgroundColor = 'red'
                document.querySelector('.message').textContent = 'You lost the game!'
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