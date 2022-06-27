// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    // escreva seu código aqui
    let contador = 0;
    let array = '';
    names.forEach((e) => array += (e.split(' ')));
    const arr = array.split('');
    arr.forEach((i) => i === 'a' || i === 'A' ? contador += 1 : contador +=0);
    return contador
  }

  console.log(containsA());