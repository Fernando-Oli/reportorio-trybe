//Com o default parameters podemos definir um valor base para o parâmetro caso, não seja atribuído nenhum valor a ele.
const nota = (valor = 'não foi encontrada, tente mais tarde') => `Sua nota ${valor}.`

console.log(nota(5)); // Welcome undefined!