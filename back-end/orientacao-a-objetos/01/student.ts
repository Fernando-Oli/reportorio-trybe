class Student {
    matricula: number;
    nome: string;
    provas: Array<number>;
    trabalhos:Array<number>;
    constructor(matricula: number, nome: string, provas: Array<number>, trabalhos: Array<number>) {
        this.matricula = matricula;
        this.nome = nome;
        this.provas = provas;
        this.trabalhos = trabalhos;
    }
    somaDasNotas() {
        let soma = 0;
        this.provas.forEach((e) => {
            soma += e;
        })
        this.trabalhos.forEach((t) => {
            soma += t
        })
        return soma;
    }
    mediaDasNotas() {
        let tt = 0;
        const _provas = this.somaDasNotas();
        this.trabalhos.forEach((i) => {
            tt += i
        })
        const total = tt + _provas;
        const numeroDeTP = this.provas.length + this.trabalhos.length
        const media = total / numeroDeTP;
        return media;
    }
}

const stu1 = new Student(123345, 'Feernandoo', [1, 10, 2], [10, 10]);
// console.log(stu1.somaDasNotas());
console.log(stu1.mediaDasNotas());