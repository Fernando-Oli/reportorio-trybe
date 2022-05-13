var nota = -101

if (nota < 80 && nota > 59){
    console.log("Recuperação")
} else if(nota < 60 && nota > 0){
    console.log("Reprovado")
} else if(nota >= 80 && nota < 101){
    console.log("aprovado")
} else{
    console.log("Valor inválido")
}
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;