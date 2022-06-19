let peca = "Bispo"
let pecas = peca.toLowerCase()

if(pecas =="peao"){
    console.log("Move-se só para frente uma casa. pode andar duas, caso seja seu primeiro movimento")
} else if(pecas =="torre"){
    console.log("Move-se quantas casas quiser nas direções horizontais ou verticais.")
} else if (pecas == "cavalo"){
    console.log("Move-se para frente ou para trás em formato de L, duas para frente/trás e uma pro lado")
} else if (pecas == "bispo"){
    console.log("Move em diagonais para frente ou para trás")
} else if (pecas == "rainha"){
    console.log("Move-se em todas as direções, para frente ou para trás.")
} else if (pecas == "rei"){
    console.log("Move-se em todas as direções uma casa")
} else{
    console.log("Peça INVÁLIDA")
}