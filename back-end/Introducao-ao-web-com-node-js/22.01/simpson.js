const fs = require('fs').promises;
const readline = require('readline-sync');

//A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
async function mostraTodos() {
    const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileContent);
    simpsons.forEach((e) => console.log(`${e.id} - ${e.name}`));
  }

// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. 
//Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.
async function mostraPorId() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const userId = readline.questionInt('Id do personagem? ');
  const personagem = simpsons.filter((e) => Number(e.id) === userId);
  if(!personagem) {
    throw new Error('id não encontrado');
  }
  console.log(`${personagem[0].id} - ${personagem[0].name}`)
}

//C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function removeArqJson() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const removeIds = simpsons.filter((e) => Number(e.id) !== 10);
  await fs.writeFile('./simpsons.json',JSON.stringify(removeIds.filter((e) => Number(e.id) !== 6)));
}

//D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
async function criaSimpsonfamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  simpsons.splice(4)
  await fs.writeFile('./simpsonFamily.json',JSON.stringify(simpsons));
}

//E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
async function adicionaNelson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const obj = { id:"8", name: "Nelson Muntz" }
  simpsons.push(obj);
  await fs.writeFile('./simpsonFamily.json',JSON.stringify(simpsons));
}

//F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.
async function subNelsonForMaggie() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const filterArray = simpsons.filter((e) => Number(e.id) !== 8);
  const obj = { id:"5", name: "Maggie Simpson" }
  filterArray.push(obj);
  await fs.writeFile('./simpsonFamily.json',JSON.stringify(filterArray));
}

subNelsonForMaggie();