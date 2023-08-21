export default class Subject {
    constructor(private _name: string) {
        this.name = _name;
      }
    get name() {
        return this._name;
    }
    set name(n: string) {
        if(n.length < 3) {
            throw new Error(`o nome ${n} deve ter pelo menos 3 caracteres`)
        }
        this._name = n;
    }
}

const math = new Subject('Matemática');
const story = new Subject('História');
const philosophy = new Subject('Po');

console.log(math);
console.log(story);
console.log(philosophy);