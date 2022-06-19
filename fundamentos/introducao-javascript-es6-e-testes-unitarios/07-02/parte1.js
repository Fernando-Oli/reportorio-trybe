const map = new Map(Object.entries(coolestTvShow))
console.log(map); 

//cria um array de objetos com key e value invés de criar um array de arrays usando o método de new Map.


const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const recebeArraydeArrays = Object.entries(países);
  for(index in recebeArraydeArrays) { //cria um estrutura que pega os valores de forma separada com [key], [value]
    console.log('País:', recebeArraydeArrays[index][0]);
    console.log('Capital:', recebeArraydeArrays[index][1]);
  };