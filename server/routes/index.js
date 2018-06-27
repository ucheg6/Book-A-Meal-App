import express from 'express';
import MealController from './meals';
// import menu from './menus'; 
// import order from './orders';
// import user from './users';



const router = express.Router();

router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Book A Meal App!.',
  }));
  
router.use('/book-a-meal', MealController);
// router.use('/book-a-meal', menu);
// router.use('/book-a-meal', order);
// router.use('/book-a-meal', user);

  
module.exports = router;
