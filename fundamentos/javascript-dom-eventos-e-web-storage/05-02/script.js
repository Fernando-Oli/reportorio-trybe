// // arquivo script.js
console.log(document.getElementById('primeiroFilho').nextElementSibling) // nó

// // <!-- Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let cor = document.getElementById('elementoOndeVoceEsta').parentNode
cor.style.color = 'red'

// // Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
primeiroFilhoDoFilho.innerText = 'Eu sou sei filho'

// // Acesse o primeiroFilho a partir de pai.
let primeiroFilho = document.getElementById('pai').childNodes
console.log(primeiroFilho[1])

// // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling)

// // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

// // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling)

// // Agora acesse o terceiroFilho a partir de pai. -->
console.log(document.getElementById('terceiroFilho').parentElement)

// // Crie um irmão para elementoOndeVoceEsta.
let section = document.getElementById('elementoOndeVoceEsta')
section = document.createElement('section')
console.log(section.nextElementSibling)

// // Crie um filho para elementoOndeVoceEsta.
let ondeEsta = document.getElementById('elementoOndeVoceEsta')
let newDiv = document.createElement('div')
newDiv.className = 'blue'
newDiv.innerText = 'Estou Certo'
ondeEsta.appendChild(newDiv)

// // Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhodoFilho = document.getElementById('primeiroFilhoDoFilho')
let secondDiv = document.createElement('div')
secondDiv.className = 'blue'
secondDiv.innerText = 'Azul é lindo'
primeiroFilhodoFilho.appendChild(secondDiv)

// // A partir desse filho criado, acesse terceiroFilho.
console.log(secondDiv.parentNode.parentElement.nextElementSibling)

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

// let paiDoPai = document.getElementsByTagName('main')
// let paiDoPai2 = paiDoPai.childNodes
// console.log(paiDoPai2)
// for(let index = 0; index < paiDoPai2.length; index+=1){
//     let element = paiDoPai2[index]
//     console.log(element)
// }
// console.log(paiDoPai)
let pai = document.getElementById('pai')
primeiroFilhoDoFilho.removeChild(secondDiv)
ondeEsta.removeChild(newDiv)
let primeiroFilho1 = document.getElementById('primeiroFilho')
pai.removeChild(primeiroFilho1)
