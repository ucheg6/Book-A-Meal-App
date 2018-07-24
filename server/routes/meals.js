import express from 'express';
import auth from '../middleware/jwt';
import authorize from '../middleware/authorize';
import MealController from '../controller/meals';


const router = express.Router();

router.get('/meals', auth.authenticate, authorize, MealController.getAllMeals);

router.post('/meal/new', auth.authenticate, authorize, MealController.addMeal);

router.put('/meals/:mealId/update', auth.authenticate, authorize, MealController.updateMeal);

router.delete('/meals/:mealId/delete', auth.authenticate, authorize, MealController.deleteMeal);

export default router;