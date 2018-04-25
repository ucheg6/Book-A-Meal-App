import express from "express";
import meal from "./meals"; 
import menu from "./menus"; 

// const express = require('express');
// const meal = require('./meals');

const router = express.Router();

router.use('/book-a-meal', meal);
router.use('/book-a-meal', menu);

module.exports = router;