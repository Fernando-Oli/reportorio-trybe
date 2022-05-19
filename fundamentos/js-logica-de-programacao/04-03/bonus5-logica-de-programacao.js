let n = 7;
let midPir = (n+1)/2;
let leftSide = midPir;
let rightSide = midPir;

for(let linha = 1;linha<=midPir;linha+=1){
    let outP = "";
    for(let coluna =1; coluna <= n; coluna+=1){
        if(leftSide==coluna || rightSide==coluna || linha == midPir){
        outP += "*";
        } else{
            outP += " ";
        }
    }
  console.log(outP)
  leftSide -=1
  rightSide +=1
}