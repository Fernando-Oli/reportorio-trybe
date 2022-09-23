// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('/home/fernando/Trybe/Exercícios/front-end/dev-front-end/09-01/exercicio8');

describe("A função getPokemonDetails", () => {

  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    getPokemonDetails((e) => e.name === 'Squirtla', (err, mess) => {
        try {
            expect(err).toEqual(new Error('Não temos esse pokémon para você :('));
            done();
        } catch (err) {
            done(err);
        }
    })
  });
  it("retorna um pokemon que existe no banco de dados", (done) => {
    getPokemonDetails((e) => e.name === 'Squirtle', (err, mess) => {
        try {
            expect(mess).toBe("Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun"
            );
            done();
        } catch (error) {
            done(error);
        }
        
    })
  });
})