import express from 'express';
import meal from './meals'; 
import menu from './menus'; 
import order from './orders';

// const express = require('express');
// const meal = require('./meals');
// const menu = require('./menus');
// const order = require('./orders');


const router = express.Router();

router.use('/book-a-meal', meal);
router.use('/book-a-meal', menu);
router.use('/book-a-meal', order);

module.exports = router;