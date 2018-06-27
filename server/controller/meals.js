import {Meals} from '../models';


class MealController {
  static async getAllMeals(req, res) {
      const meals = await Meals.findAll();
      if(meals.length === 0) {
          return res.status(404).json({
              status: 'success',
              message: 'There is currently no meal!',
              meals,
          });
      }
      return res.status(200).json({
          meals,
          status: 'success',
          message: 'Meals found!'
      });

   } 

   static async getMeal(req, res) {
       const error = {};
       const matchedMeal = await Meals.findOne({
           where: { id: req.params.mealId },
       });
       if(!matchedMeal) {
           error.id = 'Meal does not exist!';
           return res.status(404).json({
               status: 'error',
               message: error.id,
               error,
           })
       }
       return res.status(200).json({
           meal: matchedMeal,
           status: 'success',
           message: 'Meal found',

       })
   }

   static async addMeal(req, res) {
       const error = {};
       let meal;
       const {
           title,
           description,
           price,
           imgUrl,
       } = req.body;
       const matchedMeal = await Meals.findOne({
           where: { title },
       });
       if(matchedMeal) {
           error.title = 'Meal already exists!';
           return res.status(422).json({
               message: error.title,
               status: 'error',
               error,
           });
       }
       if(imgUrl) {
           meal = await Meals.create({
                title,
                description,
                price,
                imgUrl,
           });
       } else {
           meal = await Meals.create({
                title,
                description,
                price,
                imgUrl,
           });
       }
       return res.status(201).json({
           message: 'Meal succesfully created!',
           status: 'success',
           meal,
       });
   }

   static async updateMeal(req, res) {
       const error = {};
       const matchedMeal = await Meals.findOne({
           where: { id: req.params.mealid },
       });
       if(!matchedMeal) {
           error.id = 'Meal id does not exist!';
           return res.status(404).json({
               mesage: error.id,
               status: 'error',
               error,
           });
       }

       try {
           const updatedMeal = await matchedMeal.update(req.body);
           return res.status(200).json({
               meal: updatedMeal,
               status: 'success',
               message: 'Meal successfully updated!',
           });

       } catch (err) {
           error.title = err.errors[0].message;
           return res.status(409).json({
               message: 'You cannot update meal name to an existing meal name',
               status: 'error',
               error,

           });

       }
   }

   static async deleteMeal(req, res) {
       const error = {};
       const matchedMeal = await Meals.findOne({
           where: { id: req.params.mealId },
       });
       if(!matchedMeal) {
           error.mealId = 'Meal does not exist!';
           return res.status(404).json({
               message: error.mealId,
               status: 'error',
               error,
           });
       }
       await matchedMeal.destroy();
       return res.status(200).json({
           message: 'Meal successfully deleted!',
           status: 'success',
       })
   }
    
}
export default MealController;