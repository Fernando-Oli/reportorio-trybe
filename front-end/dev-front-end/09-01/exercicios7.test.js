const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 3000);
  };
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