// 2.Cria o arquiv bmi e faça que o node rode o calculom pel comando npm run bmi
const readline = require('readline-sync');
const weight = readline.questionFloat('Qual seu peso (Em KG)?');
const height = Number(readline.questionFloat('Qual sua altura (Em metros, ex.: 1.75) ?'));
const calculo = weight/(height*height) ;
if (calculo < 18.5) {
    return console.log(`Seu cálculo de IMC é ${calculo}.
    Abaixo do peso(magreza), 
    Altura: ${height}, peso: ${weight}`);
}
if (calculo >= 18.5 && calculo <= 24.9) {
    return console.log(`Seu cálculo de IMC é ${calculo}.
    Peso normal, 
    Altura: ${height}, peso: ${weight}`);
}

if (calculo >= 25 && calculo <=  29.9) {
    return console.log(`Seu cálculo de IMC é ${calculo}.
    Acima do peso (sobrepeso), 
    Altura: ${height}, peso: ${weight}`);
}

if (calculo >= 30 && calculo <=  34.9) {
    return console.log(`Seu cálculo de IMC é ${calculo}.
    Obesidade grau I, 
    Altura: ${height}, peso: ${weight}`);
}

if (calculo >= 35 && calculo <=  39.9) {
    return console.log(`Seu cálculo de IMC é ${calculo}.
    Obesidade grau II, 
    Altura: ${height}, peso: ${weight}`);
}

console.log(`Seu cálculo de IMC é ${calculo}. Obesidade graus III e IV, Altura: ${height}, peso: ${weight}`);