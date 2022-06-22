const { info } = require("console");

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];
// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  let empregado = '';
  let array = '';
  for(let x = 0; x < professionalBoard.length; x += 1){
    array = professionalBoard[x].id;
    if(array === id){
      empregado = professionalBoard[x];
    };
  };
  if(!empregado){
    throw new Error('ID não identificada');
  };
  if(!empregado[detail]){
    return 'Informação indisponível';
  };
  return empregado[detail];
};
//   };
console.log(searchEmployee('4678-2', 'firstName'));

module.exports = {searchEmployee};