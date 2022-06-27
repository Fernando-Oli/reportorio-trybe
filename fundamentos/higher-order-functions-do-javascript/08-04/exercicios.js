//1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arr) {
    // escreva seu código aqui
    return arr.reduce((acc, curr) => acc += curr);
  }

  console.log(flatten(arrays))