import express from 'express';

import { user } from "../controller";



const router = express.Router();

router.get('/users', user.getAllUsers);

router.post('/user/new', user.addUser);



export default router;