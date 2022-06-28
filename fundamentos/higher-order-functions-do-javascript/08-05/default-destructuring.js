//Podemos atribuir valor para uma ket que não existe no nosso objeto

const obj = {
  verdade: true,
  falso: false,
}
const {meiaVerdade = 'truefalse'} = obj


//Conteúdo Trybe

const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;
//se o nationality não tiver valor(undefined, null) ele recebe aquele atribuído a key.
const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));