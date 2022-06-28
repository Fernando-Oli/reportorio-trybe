//Conseguimos reduzir elementos de um uma função que retorna um objeto.

//Sem shorthand
const empresa = (nome, cidade, tamanho) => ({
    nome: nome,
    cidade: cidade,
    tamanho: tamanho,
})

console.log(empresa('FanBase', 'São Paulo', 'Pequena'))


//Com shorthand

const empresa1 = (nome, cidade, tamanho) => ({
    nome,
    cidade,
    tamanho,
})

console.log(empresa1('FanBase', 'São Paulo', 'Pequena'))

//Conteúdo Trybe
//Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
    //feito por mim
    latitude,
    longitude});
  
  console.log(getPosition(-19.8157, -43.9542));