'use strict';

const ai = Math.trunc(Math.random()*20)+1
console.log(ai)

    let score = 20

document.querySelector('.check').addEventListener("click", () => {
    const guess = Number(document.querySelector('.guess').value)

    if(!guess){
        document.querySelector('.message').textContent = "⛔ no number ⛔"
    }
    else{
        if(guess === ai){
            document.querySelector('body').style.backgroundColor = 'green'
            document.querySelector('.message').textContent = "You Won"
            document.querySelector('.number').textContent = ai
        }else if(guess < ai){
            if(score > 0){
                document.querySelector('.message').textContent =  "it's almost, it's a little bigger"
                score--
                document.querySelector('.score').textContent = score
            }else{
                document.querySelector('body').style.backgroundColor = 'red'
                document.querySelector('.message').textContent = 'You lost the game!'
            }

        }else if(guess > ai){
            if (score > 0 ){
            document.querySelector('.message').textContent =  "it's almost, it's less"
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
    location.reload()
})