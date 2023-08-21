const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app.js');

const { expect } = chai;

chai.use(chaiHttp);

const bodyReturn = {
  "totalChocolates": 4
}

describe('Usando o método GET em /chocolates/total', () => {
    it('retorna a quantidade de tipos de chocolates que tem', async () => {
        const response = await chai
            .request(app)
            .get('/chocolates/total');
            console.log(response);
        expect(response.status).to.be.equals(200);
        expect(response.body).to.deep.equal(bodyReturn);
    });
});