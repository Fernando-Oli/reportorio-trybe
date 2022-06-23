let asterisco = '#';
let resultado = '';
let n = 5;
let inputPosition = n;
for(let linha =1; linha <= n; linha++){
    for (index = 1;index <= n;index += 1) {
        if (index < inputPosition) {
            resultado += ' '
        } else {
            resultado += asterisco
        }}    
  console.log(resultado);
  resultado = '';
  inputPosition -= 1;
};