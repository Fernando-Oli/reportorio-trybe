let jogadora = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

console.log('A jogadora ' + jogadora.name + ' ' + jogadora.lastName + ' tem ' + jogadora.age + ' anos de idade.')
console.log('A jogadora ' + jogadora['name'] + ' ' + jogadora['lastName'] + ' foi eleita a melhor do mundo por ' + jogadora.bestInTheWorld.length + ' vezes.')
console.log('A jogadora possui ' + jogadora.medals.golden + ' medalhas de ouro e ' + jogadora.medals.silver + ' medalhas de prata.');





