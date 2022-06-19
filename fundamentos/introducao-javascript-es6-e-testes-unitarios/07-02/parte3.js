const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  const AddNight = (lessons, keys, values) => {
    lesson2[keys] = values;
    return lessons;
  }
console.table(AddNight(lesson2, 'turno', 'noite' ));

//2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const ListKeys = (lesson) => {
    return Object.keys(lesson);
}
console.log(ListKeys(lesson3));

//3. Crie uma função para mostrar o tamanho de um objeto.
const objLength = (licoes) => {
    return Object.keys(licoes).length;
}
console.log(objLength(lesson1));

//4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listValuesObj = (e) => Object.values(e);
console.log(listValuesObj(lesson1));

//5.Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const allStudents = () => {
    const lesson1Students = allLessons.lesson1.numeroEstudantes;
    const lesson2Students = allLessons.lesson2.numeroEstudantes;
    const lesson3Students = allLessons.lesson3.numeroEstudantes;
    return lesson1Students + lesson2Students + lesson3Students;
}
console.log(allStudents());

//7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (lessions, number) => {
    const objKeys = Object.keys(lessions);
    return objKeys[number];
}
console.log(getValueByNumber(lesson1, 0));

//8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (objeto, nomeDaChave, valorDaChave) => {
    const obj = Object.entries(objeto);
    for(index in obj){
        if(obj[index][0] == nomeDaChave && obj[index][1] == valorDaChave){
            return true;
        };
    }
    return false;
};
console.log(verifyPair(lesson1, 'turno','manhã'));

//Bônus

//1.🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const mathStudents = () => {
    let soma = 0;
    const materia1 = allLessons.lesson1.materia;
    const materia2 = allLessons.lesson2.materia;
    const materia3 = allLessons.lesson3.materia;
    if(materia1 === 'Matemática'){
        const lesson1Students = allLessons.lesson1.numeroEstudantes;
        soma += lesson1Students;
    }
    if(materia2 === 'Matemática'){
        const lesson2Students = allLessons.lesson2.numeroEstudantes;
        soma += lesson2Students;
    }
    if(materia3 === 'Matemática'){
        const lesson3Students = allLessons.lesson3.numeroEstudantes;
        soma += lesson3Students;
    }
    return soma;
}
console.log(mathStudents());

//2. 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (objeto, nomeProfessor) => {
    if(nomeProfessor = 'Maria Clara'){
       const objLesson1 = objeto.lesson1
        return objLesson1
    }
}
console.table(createReport(allLessons, 'Maria Clara'));