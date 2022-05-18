let n = 10;
let asterisco = "*";
let saida = "";
let midPir = 0;
if(n%2==0){
    midPir = n/2
}else{
    midPir = (n+1)/2
}
let leftSide = midPir;
let rightSide = midPir;

for(let linha = 0; linha <=midPir; linha+=1){
    for(let coluna = 0; coluna <= n; coluna+=1){
        if(coluna > leftSide && coluna < rightSide){
            saida = saida + asterisco;
        } else{
            saida += " "
        }
    }
    console.log(saida)
    saida = ""
    leftSide -=1
    rightSide +=1
}