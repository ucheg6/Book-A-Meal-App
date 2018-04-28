import { menu } from '../server/controller/index';

const db = require('../server/model/db');




// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');

const expect = require('chai').expect;

chai.use(require('chai-http'));

describe('menus', () => {


  /* Test the /GET route */
  describe('API endpoint /menus', () => {
    it('should return all menus', () => chai.request(server)
      .get('/api/v1/book-a-meal/menus')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.menus).to.be.an('array');
      }));

  });

  // GET - Invalid path
  it('should return Not Found', () => chai.request(server)
    .get('/INVALID_PATH')
    .then((res) => {
      throw new Error('Path exists!');
    })
    .catch((err) => {
      expect(err).to.have.status(404);
    }));


  /*
  * Test the /POST route
  */
  describe('POST /menus', () => {
    it('it should  POST a meal ', (done) => {
      const menus = {
        id: 5,
        title: 'omellete',
        date: '20-10-2018',
        mealId: 1,
      };
      chai.request(server)
        .post('/api/v1/book-a-meal/menu/new')
        .send(menus)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          done();
        });
    });

  });


 

});
