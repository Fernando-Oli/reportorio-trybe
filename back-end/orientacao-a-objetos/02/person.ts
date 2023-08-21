export default class Person {
    constructor(private _name: string, private _birthDate: Date) {
        this.name = _name;
        this.birthDate = _birthDate;
      }
    get name() {
        return this._name;
    }
    get birthDate() {
        return this._birthDate;
    }
    set name(name: string) {
        if(name.length < 3) {
            throw new Error ('o nome deve ter mais que 3 caracteres');
        }
        this._name = name;
    }
    set birthDate(birthDate: Date) {
        this.validateBirthDate(birthDate);
        this._birthDate = birthDate;
    }
    //course
    static getAge(value: Date): number {
        const diff = Math.abs(new Date().getTime() - value.getTime());
        const yearMs = 31_536_000_000;
        return Math.floor(diff / yearMs);
      }
      //course
      private validateBirthDate(value: Date): void {
        if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
      }
    
}

const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));

console.log(maria);
console.log(luiza);