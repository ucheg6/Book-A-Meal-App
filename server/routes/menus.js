import express from 'express';

import { menu } from '../controller';


const router = express.Router();

router.get('/menus', menu.getAllMenus);
router.post('/menu/new', menu.addMenu);





export default router;
