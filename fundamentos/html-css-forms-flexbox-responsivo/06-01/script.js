// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function preventDefaulte(event){
    event.preventDefault();
}
function preventLetters(event){
    const keys = event.key;
    if(keys !== 'a'){
        event.preventDefault();
    }
    
}
HREF_LINK.addEventListener('click', preventDefaulte);
INPUT_CHECKBOX.addEventListener('click', preventDefaulte);
INPUT_TEXT.addEventListener('keypress', preventLetters);