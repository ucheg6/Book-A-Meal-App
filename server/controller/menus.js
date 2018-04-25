'use strict'
const db = require("../model/db");
 

class Menu {
    getAllMenus(request, response){
        let menus = db.menus;
          
     response.json({
        menus: menus
    });
    }

    addMenu(request, response) {
        let menus = db.menus;
        const menuInfo = {
            id:Number(request.body.id),
            title: request.body.title,
            date: request.body.date,
           mealId:Number(request.body.mealId),
        }
        let i;
        for(i = 0; i < menus.length; i++){
            if(menuInfo.title === menus[i].title){
                response.status(409).json({
                  message: `${menuInfo.title} already exists!`
                });
            }
        }
        menus.push(menuInfo);
        response.status(201).json({
           menus
       });
    }
}

const menus = new Menu();

export default menus;