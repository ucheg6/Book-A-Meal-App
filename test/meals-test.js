import { meal } from '../server/controller/index';

const db = require('../server/model/db');




// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');

const expect = require('chai').expect;

chai.use(require('chai-http'));

describe('meals', () => {


  /* Test the /GET route */
  describe('API endpoint /meals', () => {
    it('should return all meals', () => chai.request(server)
      .get('/api/v1/book-a-meal/meals')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.meals).to.be.an('array');
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
  describe('POST /meals', () => {
    it('it should  POST a meal ', (done) => {
      const meals = {
        id: 5,
        title: 'Yamarita',
        description: 'deli',
        price: 1700,
        imageUrl: 'https://ibravoh.com/fs.jpg',
      };
      chai.request(server)
        .post('/api/v1/book-a-meal/meal/new')
        .send(meals)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          done();
        });
    });

  });


  // Testing how to update a task expecting status 201 of success
  it('should add a new item on put', (done) => {
    chai.request(server)
      .put('/api/v1/book-a-meal/meals/1/update')
      .send({ title: 'Yam' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');

        done();
      });
  });

  it('should delete an item on delete', (done) => {
    chai.request(server)
      .delete('/api/v1/book-a-meal/meals/3/delete')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });


});
