const db = require('../model/db');

class User {
    getAllUsers(request, response) {
        const users = db.users;
    
        response.json({
          users,
        });
      }

      addUser(request, response) {
        const users = db.users;
        const UserInfo = {
          id: Number(request.body.id),
          fullName: request.body.title,
          username: request.body.username,
          email: request.body.email,
          password:Number(request.body.password),
          role: request.body.role,
        };
        let i;
        for (i = 0; i < meals.length; i++) {
          if (userInfo.fullName === users[i].fullName) {
            response.status(409).json({
              message: `${userInfo.fullName} already exists!`,
            });
          }
        }
    
    users.push(userInfo);
        response.status(201).json({
          users,
        });
      }
}



const users = new User();

export default users;
