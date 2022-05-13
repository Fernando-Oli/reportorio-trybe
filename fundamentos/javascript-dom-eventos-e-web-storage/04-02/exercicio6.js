let numbers = [2, 2, 2, 2, 76, 8, 100, 2, 34, 2];
let dois = 0

for(let x = 0; x < numbers.length; x++)
    if(numbers[x]%2!==0){
        dois = (numbers[x])
        console.log(dois)
}
if(dois == 0){
    console.log('nenhum valor ímpar encontrado')
}