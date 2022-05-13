let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numMax = 0
numbers.forEach((element) => {//o for Each  permite criar um loop que passa do primeiro ao último. 
    //forEach recebe os elementos da array numbers, faz algum com o número e passa pro próximo
    if (numMax < element){
        numMax = element
    }// se o numero maximo for menor que o elemento do array, o numero maximo recebe(substitui) o element 
})
console.log(`${numMax}`)