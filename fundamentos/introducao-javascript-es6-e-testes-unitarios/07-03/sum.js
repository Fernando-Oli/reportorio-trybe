function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
const ifOfEncode = (sepT) => {
  switch (sepT) {
  case 'i':
    return 3;
  case 'o':
    return 4;
  case 'u':
    return 5;
  default:
    return sepT;
  }
};
function encode(vogais) {
  let sepT = vogais.split('');
  let resultado = '';
  for (let index = 0; index < sepT.length; index += 1) {
    if (sepT[index] === 'a') {
      resultado += 1;
    } else if (sepT[index] === 'e') {
      resultado += 2;
    } else {
      resultado += ifOfEncode(sepT[index]);
    }
  }
  return resultado;
}
const ifOfDecode = (number) => {
  switch (number) {
  case '3':
    return 'i';
  case '4':
    return 'o';
  case '5':
    return 'u';
  default:
    return number;
  }
};
function decode(vogais) {
  let sepT = vogais.split('');
  let resultado = '';
  for (let index = 0; index < sepT.length; index += 1) {
    if (sepT[index] === '1') {
      resultado += 'a';
    } else if (sepT[index] === '2') {
      resultado += 'e';
    } else {
      resultado += ifOfDecode(sepT[index]);
    }
  }
  return resultado;
};

function techList(tech, name) {
  if (tech.length === 0 || name.length === 0) {
    return 'Vazio!';
  }
  let array = [];
  let alfa = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    array[index] = {};
    array[index].tech = alfa[index];
    array[index].name = name;
  }
  return array;
};
module.exports = {sum, myRemove, myFizzBuzz, decode, encode, techList};
