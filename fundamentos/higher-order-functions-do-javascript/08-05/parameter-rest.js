//Parâmetro Rest

// coloca um spread-operator dentro dos parâmetros para tornar variado mais flexível a quantidade de parâmetro em uma função, os parâmetros vem em forma de um array.

function restTest(...para) {
    return `Parâmetros: ${para.length} do ${para[0]}`
}
console.log(restTest('Fernando', 'Luis', 'Rodrigues', 'de', 'Oliveira', 0, null, {}, []));

//Usar o rest como parâmetro de uma HOF

const mul = (...num) => num.reduce((acc, curr) => acc *= curr, 1);
console.log(mul(1, 2, 3, 4, 5, 6, 7, 8, 9));

