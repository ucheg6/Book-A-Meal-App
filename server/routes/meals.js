// import express from "express";

// import {meal} from "../controller";

const express= require('express');
const meal= require('../controller/index').meal;




const router = express.Router();

router.get("/meals", meal.getAllMeals);
router.post("/meal/new", meal.addMeal);
router.put("/meals/:mealId", meal.updateMeal);





//change to export default router
module.exports = router;