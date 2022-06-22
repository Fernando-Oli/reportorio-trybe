const createEmplyee = (nomeCompleto) => {
  const email = `${nomeCompleto.replace(/ /g,"_")}@trybe.com`
  const resultado = `${nomeCompleto} ${ email}`;
  return resultado
}

const newEmployees = () => {
  const employees = {
    id1: createEmplyee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: createEmplyee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: createEmplyee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees());