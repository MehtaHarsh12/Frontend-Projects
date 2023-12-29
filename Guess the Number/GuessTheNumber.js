let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){ //a,abc,5000,-5,0
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess <1){
        alert('Please enter a number >1')
    }else if(guess >100){
        alert('Please enter a number <100')
    }else{
        prevGuess.push(guess)
        if(numGuess ===11){
            displayGuess(guess)
            displayMessage(`Game Over.Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){ //Guessed number is equal to random number or not,In case of Low or high than required range 1-100
    if(guess = randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`The number is too Low`)
    }else if(guess>randomNumber){
        displayMessage(`The number is too High`)
    }
}
function displayGuess(guess){ //THis method is called cleanup guess,This method interact with directly DOM,Remaining guess updae,Shows Previous guesses 
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess ++;
    remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message){ //Low or Hi message printing
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function newGame(message){ //To start new game
    userInput.value = ''
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame()
}
function endGame(message){ //To end game
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}