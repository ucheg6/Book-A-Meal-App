import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import * as dotenv from 'dotenv';
import { Users } from '../models';

dotenv.config();
const secretKey = process.env.JWT_SECRET;

const auth = {
    authenticate(req, res, next) {
        const token = req.headers.authorization || req.headers['x-access-token'];
        if (!token) {
            res.status(401).json({
                message: 'Unauthorized!'
            });
        }
        jwt.verify(token, secretKey, (error, result) => {
            if (error) {
               return res.status(401).send({
                    message: 'Invalid token!'
                })

            } else {

                const id = result.user.id;

                Users.findById(id)
                    .then((user) => {
                        if (user) {
                            req.decode = user;
                            next();
                        } else {
                            return res.send({ message: 'unauthorized' })
                        }

                    })
                    .catch(err => res.send({ message: 'internal error' }));
            }


        });
    }
}

export default auth;
