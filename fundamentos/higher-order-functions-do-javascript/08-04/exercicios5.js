// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  //com split
  const containsA = () => names.reduce((acc, curr) => acc += curr.split('').reduce((acc, curr) => curr === 'A' || curr === 'a' ? acc += 1 : acc += 0 ,0),0);
  console.log(containsA());

  //com spread
  const containsB = () => names.reduce((acc, curr) => acc += [...curr].reduce((acc, curr) => curr === 'B' || curr === 'b' ? acc += 1 : acc += 0 ,0),0);
  console.log(containsB());