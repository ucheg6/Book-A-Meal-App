// import express from "express";
// import meal from "./meals"; 

const express = require('express');
const meal = require('./meals');

const router = express.Router();
router.use("/book-a-meal", meal);

module.exports = router;