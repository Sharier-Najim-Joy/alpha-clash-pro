// function play(){
//     document.getElementById('home-page').classList.add('hidden');
//     document.getElementById('play-page').classList.remove('hidden')

// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player press', playerPressed);
    if(playerPressed==='Escape'){
        gameOver()
    }
    if(playerPressed==='Enter'){
        play()
    }
    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet =currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(expectedAlphabet,playerPressed);
    if(expectedAlphabet === playerPressed){
        // // update score
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreValue = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreValue);
        
        // const newScore = currentScore+1;

        // currentScoreElement.innerText = newScore;
        
        // // start a new round
        // removeBackgroundColor(expectedAlphabet)
        // continueGame()

        // ---------- same code, use function
        const currentScore = getTextElementValueById('current-score');
        const newScore =currentScore+1;
        setTextElementValueById('current-score',newScore)

        removeBackgroundColor(expectedAlphabet)
        continueGame()
    }
    else{
        // get the current life value
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeValue = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeValue);

        // const newLife = currentLife-1;
        // currentLifeElement.innerText=newLife;

        // ---------- same code, use function
        const currentLife =getTextElementValueById('current-life');
        const newLife =currentLife-1;
        setTextElementValueById('current-life',newLife)

        if(newLife===0){
            gameOver()
        }
    }
    
}
// capture keyboard key press
document.addEventListener('keyup',handleKeyboardButtonPress)

function continueGame(){
    const alphabet = randomAlphabet(); 
    // set randomly generated alphabet to the screen (shoe it)
    const currentAlphabet = document.getElementById('current-alphabet')
    currentAlphabet.innerText=alphabet
    // set back ground color
    setBackGroundColor(alphabet)
}

function play(){
    hiddenElementById('home-page')
    hiddenElementById('score')
    showElementsById('play-page')
    // reset score and life
    setTextElementValueById('current-score',0)
    setTextElementValueById('current-life',5)
    continueGame();
}

function gameOver(){
    hiddenElementById('play-page');
    showElementsById('score')
    // update final score
    const currentScore =getTextElementValueById('current-score');
    setTextElementValueById('final-score',currentScore);
    // clear the last selected alphabet on highlight
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColor(currentAlphabet); 
}
