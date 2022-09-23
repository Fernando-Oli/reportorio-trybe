// 7 - Escreva um teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

//Conteúdo Trybe
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 3000);
};

//Feito por mim
  test('Testa se retorna uma string em caixa alta' , (done) => {
      uppercase('not calculated', (result) => {
          try {
              expect(result).toBe('NOT CALCULATED');
              done();
          } catch (err){
              done(err);
          }
      })
  });

