import express from 'express';
import auth from '../middleware/jwt';
import authorize from '../middleware/authorize';

import UserController from '../controller/users';


const router = express.Router();


router.post('/auth/signup', UserController.createUser);

router.post('/auth/signin', UserController.signinUser);

router.delete( '/users/:userId', [auth.authenticate, authorize,], UserController.deleteUserAccount);

export default router;