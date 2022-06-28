//Usando o destruc em arrays

const array = ['Fernando', 'Luis', 'Oliver', 'Rodrigo'];

const [nome1, nome2, nome3, nome4] = array;

console.log(nome1, nome2, nome3, nome4);

//********** - Conteúdo Trybe - **********//

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

//Feito por mim
const [saudacao, funcao] = saudacoes;
funcao(saudacao);

//2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

//Feito por mim
// const array1 = [bebida, comida, animal]
// [comida, animal, bebida] = [...array1] ou array1
// //Por que nao funciona?
[comida, animal, bebida] = [bebida, comida, animal]
console.log(comida, animal, bebida)

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;
//usa-se as virgulas para nao atribuir os três primeiros elementos do array que nao condiziam com o tipo do array.
console.log(numerosPares)