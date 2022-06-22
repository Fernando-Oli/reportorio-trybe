//
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'C', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const testProve = (a, b) => {
    let resultado = 0;
    for (let index = 0; index < a.length; index += 1) {
        if (a[index] === b[index]) {
           resultado += 1;
       } else if (b[index] !== 'N.A') {
           resultado -= 0.5;
       }
    }
    return resultado;
};
const resultProve = (gabarito, answers, action) => action(gabarito, answers);
console.log(resultProve(RIGHT_ANSWERS, STUDENT_ANSWERS, testProve));