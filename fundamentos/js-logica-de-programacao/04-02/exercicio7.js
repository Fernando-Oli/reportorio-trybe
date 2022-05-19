let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = numbers[1]
for(let x = 0; x < numbers.length; x++){
    if(resultado > numbers[x]){
        resultado = numbers[x]
    }
}

console.log(Math.min(resultado))