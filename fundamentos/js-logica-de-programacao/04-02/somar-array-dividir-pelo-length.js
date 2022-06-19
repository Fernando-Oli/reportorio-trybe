let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0
for(let x = 0; x < numbers.length; x ++){
    resultado += numbers[x]
}
let meArit = resultado/numbers.length

if(meArit > 20){
    console.log("valor maior que 20")
} else{
    console.log("valor menor ou igual a 20")
}