import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import validator from 'express-validator';


const api = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());

app.use('/api/v1', api);


app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the Book-A-Meal-App.',
}));





module.exports = app;   