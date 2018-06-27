import express from 'express';


import MealController from '../controller/meals';


const router = express.Router();

router.get('/meals', MealController.getAllMeals);

router.post('/meal/new', MealController.addMeal);

router.put('/meals/:mealId/update', MealController.updateMeal);

router.delete('/meals/:mealId/delete', MealController.deleteMeal);

export default router;