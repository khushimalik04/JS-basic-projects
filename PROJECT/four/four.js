let randomNumber = (parseInt(Math.random() * 100 + 1 ));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){//checks number guessed is correct or not  like btw 1-100 or not
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('Please enter a valid number more than 1') ;
    }else if(guess>100){
        alert('Please enter a valid number less than 100');
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){//print** mssg if the guessed value is correct low hight etc
    if(guess === randomNumber){
        displayMessage(`you guessed it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`number is TOOO low`);
    }else if(guess > randomNumber){
        displayMessage(`number is TOOO high`);
    }   
}

function displayGuess(guess){ //cleanup method-clean value so that next val to be updated and update prev guesses and guesses remaining
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message){//just display message
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
    
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<button id="newGame">Start new Gam</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber =(parseInt(Math.random() * 100 + 1 ));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-numGuess}`;
        lowOrHigh.innerHTML = '';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}




