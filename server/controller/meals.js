'use strict'
const db = require("../model/db");

class Meal {

    getAllMeals(request, response){
        let meals = db.meals;
        console.log('am here');
     response.json({
         meals: meals
     });
    };

    addMeal(request, response){
        let meals = db.meals;
        const mealInfo={
            id:Number(request.body.id), 
            title:request.body.title, 
            description:request.body.description, 
            price:Number(request.body.price), 
            imageUrl:request.body.imageUrl
        }
        let i;
        for(i = 0; i < meals.length; i++){
            if(mealInfo.title === meals[i].title){
                response.status(409).json({
                  message: `${mealInfo.title} already exists!`
                });
            }
        }

       meals.push(mealInfo);
        response.status(201).json({
           meals
       });
    }
    
    updateMeal(request, response){
        let meals = db.meals;
        const mealId = Number(request.params.mealId);

        meals.filter((meal)=>{
           if(meal.id !== mealId){
            // response.json({message:'not found'});
               return false
           }else{
            meal.title = request.body.title || meal.title;
            meal.description=request.body.description || meal.description;
            meal.price = Number(request.body.price) || meal.price;
            meal.imageUrl=request.body.imageUrl || meal.imageUrl;
 
            response.json({meals});
            return true
           }

        });

    }

}
const meals = new Meal();

module.exports = meals