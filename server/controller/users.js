import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { Users } from '../models';

dotenv.config();
const secretKey = process.env.JWT_SECRET;
const expiresIn = Number(process.env.JWT_EXPIRATION);

class UserController {
    static async createUser(req, res) {
        const error = {};
        const {
            fullName,
            email,
            password,
            role,
        } = req.body;

        const matchedUser = await Users.findOne({
            where: { email: email.toLowerCase() },
        });

        if (matchedUser) {
            error.email = 'Email already exists!';
            return res.status(422).json({
                message: error.email,
                status: error,
                error,
            })

        }

        const newUser = await Users.create({
            fullName,
            email,
            password,
            role,
        });

       const user = {
            id: newUser.id,
            fullname: newUser.fullName,
            email: newUser.email,
            role: newUser.role,
        }

        const token = jwt.sign({
            user,
            expiresIn
        },secretKey);

        return res.status(201).json({
            message: 'User Successfully created!!!',
            user,
            status: 'success',
            token
        });
    }

    static async signinUser(req, res) {
        const { email, password } = req.body;
        const error = {};
        const matchedUser = await Users.findOne({
            where: { email: email.toLowerCase() },
        });

        if (!matchedUser) {
            error.email = 'User does not exist!';
            return res.status(404).json({
                message: error.email,
                status: 'error',
                error,
            });
        }

        const match = await Users.findOne({
            where: { password: password },
        });
        if (match) {

            const user= {
                id: matchedUser.id,
                name: matchedUser.fullName,
                email: matchedUser.email,
                role: matchedUser.role,
            }

            const token = jwt.sign({
                user,
                expiresIn
            },secretKey);

            return res.status(200).json({
                message: 'User successfully signed in!!',
               user,
                status: 'success',
                token
            });
        }
        error.password = 'You entered a wrong password!!';
        return res.status(401).json({
            message: error.password,
            status: 'error',
            error,
        })


   }

   static async deleteUserAccount(req, res) {
       const { userId } = req.params;
       const error = {};
       
       const matchedUser = await Users.findById(userId);

       if(!matchedUser) {
           error.message = 'User not Found';
           return res.status(404).json({
               message: error.message,
               status: error,
               error,
           });
       }
       await matchedUser.destroy();
       return res.status(200).json({
           message: 'User deleted Successfully!',
           status: 'success',
       });

   }

} 

export default UserController;