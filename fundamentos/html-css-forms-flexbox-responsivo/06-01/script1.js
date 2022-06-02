// prevent Default no botão submit

const btnSend = document.getElementById('btn-send');


// function preventDefaulte(event){
//     event.preventDefault();
// }

// btnSend.addEventListener('click', preventDefaulte)


//bonus
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputTextArea = document.getElementById('text-area');
const inputBoxImage = document.getElementById('termo-2')
console.log(inputBoxImage.checked)
btnSend.addEventListener('click', function(event){
    if(inputName.value.length > 40){
        event.preventDefault();
        window.alert('Dados inválidos!');
    } else if(inputBoxImage.checked === false){
        event.preventDefault();
    } else {
        window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
})