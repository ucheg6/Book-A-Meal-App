import express from 'express';
// const express = require('express');

import { meal } from '../controller';


const router = express.Router();

router.get('/meals', meal.getAllMeals);

router.post('/meal/new', meal.addMeal);

router.put('/meals/:mealId/update', meal.updateMeal);

router.delete('/meals/:mealId/delete', meal.deleteMeal);

export default router;


