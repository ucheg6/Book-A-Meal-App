import express from 'express';

import { order } from '../controller';


const router = express.Router();


router.get('/orders', order.getAllOrders);
router.post('/order/new', order.addOrder);
router.put('/orders/:orderId/update', order.updateOrder);






export default router;

