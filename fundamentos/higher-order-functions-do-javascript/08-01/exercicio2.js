//Cria uma função que recebe o número apostado e retorna se a pessoa ganhou ou não. Utilizar HigherOrderFunction.

const numberCheck = (number1, number2) => {
    if (number1 === number2) {
        return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
};

const sorteio = (numberPostado) => {
    const numberRandom = Math.floor(Math.random() * 5)+1;
    const checkNumber = numberCheck(numberRandom, numberPostado);
    return checkNumber;
};
console.log(sorteio(5));