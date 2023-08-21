import Person from "./person";
import Subject from './Subject';

// nao terminado
class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;
  constructor(name: string, birthDate: Date, private _salary: number, subject: Subject) {
    super(name, birthDate);
    this._subject = Subject;
    this.salary = _salary;
    this.admissionDate = new Date();
  }

  get salary() {
    return this._salary;
  }
  get subjects() {
    return this._subject;
  }
  set salary(sal: number) {
    if(sal < 0) {
      throw new Error('O salário deve ser positivo');
    }
    this._salary = sal;
  }
  set subjects(sub: string) {
    if(sub.length < 16) {
      throw new Error('A matéria deve ter pelo menos 16 letras')
    }
    this._subject = sub;
  }
}