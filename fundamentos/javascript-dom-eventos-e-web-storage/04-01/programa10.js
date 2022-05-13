const custo = 45
const venda = 90
let imp = custo*0.2+custo
let lucro = venda - imp
if(venda < 0 || custo < 0){
    console.log("[ERRO]")
} else{
    console.log(lucro)
}
