//Exercicio 1 - cria um codigo para calcular o IMC


const readline = require('readline-sync');

const weight = readline.questionInt('Qual seu peso (Em KG)?');
const height = Number(readline.question('Qual sua altura (Em metros, ex.: 1,75m) ?'));
const calculo = weight/(height*height) ;
console.log(`Seu cálculo de IMC é ${calculo}. Altura: ${height}, peso: ${weight}`);

const readline = require('readline-sync');