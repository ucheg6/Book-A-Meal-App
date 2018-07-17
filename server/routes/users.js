import express from 'express';


import UserController from '../controller/users';


const router = express.Router();


router.post('/auth/signup', UserController.createUser);

router.post('/auth/signin', UserController.signinUser);

router.delete( '/users/:userId', UserController.deleteUserAccount);

export default router;