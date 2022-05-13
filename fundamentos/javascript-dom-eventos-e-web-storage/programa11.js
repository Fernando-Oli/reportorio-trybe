const salario = 3000
let INSS;
let IR;

if(salario<=1556.94){
    INSS = salario*0.08
    salIn = salario-INSS
    console.log(INSS)
} else if(salario>=1556.95 && salario < 2594.93){
    INSS = salario*0.09
    salIn = salario-INSS
    console.log(INSS)
} else if(salario>=2594.93 && salario < 5189.83){
    INSS = salario*0.11
    salIn = salario-INSS
    console.log(INSS)
} else if(salario > 5189.82){
    INSS = 570.88
    salIn = salario-INSS
    console.log(INSS)
} else{
    console.log("valor inválido")
}

var salIn = salario - INSS;

if (salIn < 1903.99){
    IR = 0
} else if(salIn < 2825.66){
    IR = (salIn*0.075)-142.80
} else if(salIn < 3751.06){
    IR = (salIn*0.15)-354.80
} else if (salIn < 4664.69) {
    IR = (salIn*0.225)-636.13
  } else {
    IR = (salIn*0.275)-869.36
  }
  console.log(salIn-IR)