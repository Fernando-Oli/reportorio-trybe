const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const geraODano = (minRange, maxRange) => {
  const RangeDamage = maxRange - (minRange - 1);
  const damage = Math.floor(Math.random() * RangeDamage) + minRange;
  return damage;
};

const DragonDamage = () => geraODano(15, dragon.strength);

const warriorDamage = () => geraODano(warrior.strength, warrior.strength * warrior.weaponDmg);

const castMage = () => {
  let mageDamage = geraODano(mage.intelligence, mage.intelligence * 2);
  let manaGasta = 15;
  if(mage.mana < 15) {
    manaGasta = 0;
    mageDamage = 'Não possui mana suficiente';
    return { mageDamage, manaGasta };
  }
  mage.mana = mage.mana -15;
  return { mageDamage, manaGasta };
};

const gameActions = {
    turnoGuerreiro: () => {
        const damage = warriorDamage();
        dragon.healthPoints = dragon.healthPoints - damage;
        warrior.damage = damage;
        return dragon.healthPoints;
    },
    turnoMago: () => {
        const damage1 =  castMage().mageDamage;
        dragon.healthPoints = dragon.healthPoints - damage1;
        mage.damage = damage1;
        return dragon.healthPoints;
    },
    turnoDragao: () => {
        const damage2 = DragonDamage();
        warrior.healthPoints = warrior.healthPoints - damage2;
        mage.healthPoints = mage.healthPoints - damage2;
        dragon.damage = damage2;
        return damage2;
    },
    resultTurn: () => battleMembers,
  };
  const turnos = () => {
    gameActions.turnoGuerreiro();
    gameActions.turnoMago();
    gameActions.turnoDragao();
  }
turnos();
turnos();
turnos();
console.log(gameActions.resultTurn());