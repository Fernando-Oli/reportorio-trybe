import Person from "./person";

class estudantPerson extends Person {
  private _enrollment = String();
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment() {
    return this._enrollment;
  }
  get examsGrades() {
    return this._examsGrades;
  }
  get assignmentsGradest() {
    return this._assignmentsGrades;
  }
  set enrollment(enrollment) {
    this._enrollment = enrollment;
  }
  set examsGrades(eG) {
    if(eG.length > 4) {
      throw new Error('deve ter no máximo 4 provas');
    }
    this._examsGrades = eG;
  }
  set assignmentsGrades(aG: number[]) {
    if(aG.length > 2) {
      throw new Error('deve ter no máximo 2 trabalhos');
    }
    this._examsGrades = aG;
  }

  generateEnrollment() {
    return String(Math.random() + 1000);
  }
  sumGrades() {
    const provas = this._examsGrades.reduce((pre: number, now: number) => {
      return pre += now
    }, 0)
    const trabalhos = this._assignmentsGrades.reduce((pre: number, now: number) => {
      return pre += now
    }, 0)
    return provas + trabalhos;
  }
  sumAverageGrade() {
    const notas = this.sumGrades();
    const numeroDeProvas = this._examsGrades.length + this._assignmentsGrades.length;
    return notas / numeroDeProvas;
  }
}