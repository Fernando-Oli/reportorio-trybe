// 1.🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.
// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }
//   testingScope(true);
// // Copie o código abaixo.
const testingScope = (escopo) => { 
    const teste = (escopo===true)? `Não devo ser utilizada fora do meu escopo (if) ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`;
    console.log(teste);
}
testingScope(true);
testingScope(false);

// 2.🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.
// Seu código aqui.

const organizeNumber = () => {
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];
    oddsAndEvens.sort((a, b) => a - b);
    return oddsAndEvens
}

console.log(organizeNumber());


// 3.Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (number) => {
    if (number === 0) {
        return 1
    }
    let array = number;
    for(let x = 1; x < number; x +=1){//tem como simplicar com while
        array *= x
    }
    return array
}
console.log(fatorial(0));
console.log(fatorial(6));
console.log(fatorial(7));
console.log(fatorial(8));
console.log(fatorial(9));

//4. Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggerWord = (frase) => {{
    const frasesSeparads = frase.split(' ');
    let wordCompare = frasesSeparads[0]
    for(let x = 0; x < frasesSeparads.length; x += 1){
        if(wordCompare.length < frasesSeparads[x].length){
            wordCompare = frasesSeparads[x]
        }
    }
    return wordCompare;
}};

console.log(biggerWord('paralelepipedo palavra maior chega agora: transparente'));

//5. No index.html

//6.🚀 Crie um código JavaScript com a seguinte especificação:
// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
const array = ['Javascript', 'CSS', 'Github', 'HTML5'];
const replaceX = (frase, parametro) => {
    const arraySplit = frase.split('');
    let fraseChange = '';
    for(let index = 0; index < arraySplit.length; index += 1){
        arraySplit[index] === 'x' ? arraySplit[index] = parametro : true;
        fraseChange += arraySplit[index];
    }   
    return fraseChange;
};

console.log(replaceX('Tryber x Aqui', 'Bebeto'));

// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.

const alpha = (replacex) => {
    let wordSplit = [];
    let wordsReplace = replacex.split(' ');
    for (let f = 0; f < wordsReplace.length; f += 1){
        wordSplit.push(wordsReplace[f].toLowerCase());
    }
    for (let y = 0; y < array.length; y += 1){
        wordSplit.push(array[y].toLowerCase());
    }
    let frases = '';
    wordSplit.sort();
    for (let w = 0; w < wordSplit.length; w += 1){
        frases += wordSplit[w];
        frases += ' '
    }
    return frases;
}
console.log(alpha(replaceX('Tryber x aqui', 'Bebeto')));