import express from 'express';
import auth from '../middleware/jwt';
import authorize from '../middleware/authorize';
import MenuController from '../controller/menus';


const router = express.Router();

router.get('/menus', [auth.authenticate, authorize,],  MenuController.getMenu);

router.post('/menu/new', [auth.authenticate, authorize,], MenuController.setupMenu);

router.put('/menus/:menuId/update', [auth.authenticate, authorize,], MenuController.updateMenu);

router.delete('/menus/:menuId/delete', [auth.authenticate, authorize,], MenuController.deleteMenu);

export default router;