function hiddenElementById(elementsId){
    const elements = document.getElementById(elementsId);
    elements.classList.add('hidden');
}
function showElementsById(elementsId){
    const elements = document.getElementById(elementsId);
    elements.classList.remove('hidden');
}

function setBackGroundColor(elementsId){
    const elements = document.getElementById(elementsId)
    elements.classList.add('bg-orange-400')
}
function removeBackgroundColor(elementsId){
    const elements =document.getElementById(elementsId);
    elements.classList.remove('bg-orange-400')
}

function getTextElementValueById(elementsId){
    const elements = document.getElementById(elementsId);
    const elementValueText = elements.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementsId,value){
    const elements =document.getElementById(elementsId)
    elements.innerText=value
}
function getElementTextById(elementsId){
    const elements = document.getElementById(elementsId);
    const text = elements.innerText;
    return text;
}
function randomAlphabet(){
    // get or create an alphabet array
    const alphabetString ='abcdefghijklmnopqrstuvwxyz/';
    const alphabets=alphabetString.split('');

    // get a random index between 0-25
    const randomNumber =Math.random()*26;
    const index =Math.round(randomNumber);
    
    const alphabet =alphabets[index]
    console.log(alphabet);
    return alphabet;
}