//Spread Operator//

//com arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const spreadArray =[...array, ...array1];
console.log(spreadArray);

//com objetos
const obj = {
    name: 'Fernando',
    idade: 21,
    Cidade: 'Anápolis',
}

const obj1 = {
    nome: 'Pamela',
    age: 20,
    city: 'Brasília',
}
const spreadObj = {
    ...obj,
    ...obj1,
}
console.log(spreadObj)
//caso as keys do obj sejam iguais, ele sobreescreve com o valor da última key.

//Spread no uso de parâmetros para um function;

const idade = (dataDeNascimento, dataAtual) => dataAtual - dataDeNascimento;
const pessoa = [2001, 2022];
console.log(idade(...pessoa));

//Também aplica-se a funções com múltiplos parãmetros.

const numeros = [500, 23, 54, 123, 12, 96, 55];

console.log(Math.max(...numeros));
//retorna o maior valor de um array

console.log(Math.min(...numeros));
//retorna o menor valor de um array

//Conteúdo Trybe, salada de frutas.
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'limão', 'melância'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['café', 'chocolate', 'sorvete'];

const fruitSalad = (fruit, additional) => [...specialFruit, ...additionalItens];

console.log(fruitSalad(specialFruit, additionalItens));



