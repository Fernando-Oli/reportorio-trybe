
const sum = (...a) => a.reduce((acc, curr) => acc += curr, 0);
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))