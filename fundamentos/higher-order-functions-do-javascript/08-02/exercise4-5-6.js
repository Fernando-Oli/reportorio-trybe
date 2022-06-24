//4 - Ordene os livros por data de lançamento em ordem decrescente.

const expectedResult = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: { name: 'Stephen King', birthYear: 1947 },
      releaseYear: 1986,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1921 },
      releaseYear: 1951,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
  ];
  
  function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    return expectedResult.sort((a, b) => b.releaseYear - a.releaseYear)
  }
  console.log(booksOrderedByReleaseYearDesc())


//🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return expectedResult.every((e) => e.author.birthYear <= 2000 && e.author.birthYear >= 1900);
}

console.log(everyoneWasBornOnSecXX());

//🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
    return expectedResult.some((e) => e.releaseYear >= 1980 && e.releaseYear <= 1989);
  }
  console.log(someBookWasReleaseOnThe80s());

// 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

function authorUnique() {
  // escreva seu código aqui
  return expectedResult.every((e) => !expectedResult.some((i) => e.author.birthYear === i.author.birthYear && e.author.name !== i.author.name))
}

console.log(authorUnique());

Array.filter((element) => element === 3);

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const b = products.map((product, index) => ({[product]: prices[index]}))
// A parenteses serve para identificar que aquele é o retorno da arrow function. Caso use nem, ao abrir as chaves, ele entende que você está abrindo a função e que o que estiver entre chaves será executado pela função
const a = products.map((element, index) => {
  const obj = {};
  obj[element] = prices[index]
  return obj;
})

console.log(b)