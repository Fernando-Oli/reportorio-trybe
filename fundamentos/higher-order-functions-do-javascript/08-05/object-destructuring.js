//Object Destructuring cria a partir de uma variavel um forma mais fácil de acessar os valores do obj

const funcionario = {
    nome: 'Roger',
    atividade: 'Gerência',
    formacao: 'Administracao',
}
const {nome, atividade, formacao} = funcionario

console.log(nome, atividade, formacao);

//Acessando o objeto dentro do Objeto

const turmaDaMonica = {
    author: 'Mauricio de Sousa',
    personagens: {
        meninos: 'cebolinha, cascão',
        meninas: 'monica e magali'
    }
}

const {author, personagens: {meninos: string}, personagens: {meninas: a}} = turmaDaMonica;
//string e a sao como "parametros" que podem receber qualquer nome.
console.log(`Quem criou foi ${author}, seus personagens principais são: ${string}, ${a}`)

//Spread Operator junto ao object Destruccturing

const numerosInteiros = {
    positivos: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    negativos: [-1, -2, -3, -4, -5, -6, -7, -8, -9],
}
const {positivos: de1a9, negativos} = numerosInteiros;
console.log(...de1a9, ...negativos);

//consigo "renomear" as keys para nomes mais compatíveis através do 
//const {keyElement: NomeCriado} = Obj

//passar elementos do Objeto como parãmtro da função

const itensDeCasa = {
    maisUsadoQuarto: 'Cama',
    maisUsadoSala: 'Sofá',
    maisUsadoBanheiro: 'Vaso',
}

const itensMaisCompradosPorArea = ({maisUsadoQuarto, maisUsadoBanheiro, maisUsadoSala}) => `1: ${maisUsadoBanheiro}, 2: ${maisUsadoQuarto}, 3: ${maisUsadoSala}`;

console.log(itensMaisCompradosPorArea(itensDeCasa));

//Conteúdo Trybe

//1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
const spreadObj = {
    ...user,
    ...jobInfos
}
console.log(spreadObj);

//2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

const {name, age, nationality, profession, squad, squadInitials} = spreadObj;

console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);