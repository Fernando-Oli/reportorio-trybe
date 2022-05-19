let num = 4;
//número a ser avaliado
let divisores = 0;
//quantidade de divisores que o num terá
for(let x = 1; x <=num; x+=1){
//estrutura que passa entre todos os número entre 1 e o número a ser avaliados, ou seja
//seus divisores
    if(num%x==0){
// se o num for dividido for x e o resto for 0, achamos um divisor e ele será adicionado a variável
        divisores +=1;
    }
}
if(divisores==2){
//se o número de dividores for igual a 2, significa que ele é primo, porque só se divide por 1 e ele mesmo.
    console.log(`Esse número ${num} é primo`);
} else{
//senão não é primo
    console.log(`Esse número ${num} não é primo`);
}