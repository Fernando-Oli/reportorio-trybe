abstract class Character {
    abstract talk (): void;
    abstract specialMove(): void;
}

class MeleeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
    talk () { console.log(`Eu, ${this._name}, te ataco de perto seu trouxa`) }
    specialMove(): void {
        console.log(this._specialMoveName)
    }
}

class LongRangeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
    talk () { console.log(`Eu, ${this._name}, te ataco de longe seu trouxa`) }
    specialMove(): void {
        console.log(this._specialMoveName)
    }
}

function presentation(character: Character) {
    character.talk();
    character.specialMove();
}

const ranger = new MeleeCharacter('Aragorn', 'Protagonismo')
const archer = new LongRangeCharacter('Legolas', 'Fecha infinita');

presentation(ranger);
presentation(archer);