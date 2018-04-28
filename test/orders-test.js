import { order } from '../server/controller/index';

const db = require('../server/model/db');




// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');

const expect = require('chai').expect;

chai.use(require('chai-http'));

describe('orders', () => {


  /* Test the /GET route */
  describe('API endpoint /orders', () => {
    it('should return all food orders', () => chai.request(server)
      .get('/api/v1/book-a-meal/orders')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
        expect(res.body.orders).to.be.an('array');
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
  describe('POST /orders', () => {
    it('it should  POST an order', (done) => {
      const meals = {
        id: 5,
        customer: 'Uche Akogwu',
        mealId: 2,
        quantity: '2 packs',
        amount: 5000,
        date: '10-4-2018',
        time: '3:30am',
      };
      chai.request(server)
        .post('/api/v1/book-a-meal/order/new')
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
      .put('/api/v1/book-a-meal/orders/3/update')
      .send({ quantity: '10 packs' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');

        done();
      });
  });

 


});
