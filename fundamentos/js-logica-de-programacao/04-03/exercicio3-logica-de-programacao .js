let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0]
let menor = array[0]
for(let x = 0; x<array.length; x++){
    if(maior.length < array[x].length){
        maior = array[x]
    } else if(array[x] < menor){
        menor = array[x]
    }
}
console.log(maior,menor)