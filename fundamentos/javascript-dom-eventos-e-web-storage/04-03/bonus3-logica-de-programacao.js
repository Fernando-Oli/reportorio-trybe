let asterisco = "*";
let n = 5;
let resultado = "";
let inputPosition=n
for(let linha =1; linha <= n; linha++){
    for(index=1;index<=n;index+=1){
        if(index < inputPosition){
            resultado = resultado + ' '
        } else{
            resultado = resultado + asterisco
        }}    
  console.log(resultado)
  resultado = ""
  inputPosition-=1  
};