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
//   const getIds = () => {
//     let array = []
//     for(let x = 0; x < professionalBoard.length; x += 1){
//         array.push(parseFloat(professionalBoard[x].id));
//         if(array[x] === 8579-6){
//             return array;
//         }
//     }
//     return 'ID não identificada';
//   }
//   const searchEmployee = (id, detail) => {
//     const Ids = getIds(id);
//     return Ids
//   };
// console.log(searchEmployee(8579-6))
//   module.exports = {searchEmployee};


  for(let x = 0; x < professionalBoard.length; x += 1){
    let array = []
    array.push(professionalBoard[0].id);
    console.log(array[x])
    if(array[x] === 8579-6){
        console.log(id + array[x])
    }
}