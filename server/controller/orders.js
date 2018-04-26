const db = require('../model/db');

class Order {
  getAllOrders(request, response) {
    const orders = db.orders;
    response.json({
      orders,
    });

  }

  addOrder(request, response) {
    const orders = db.orders;
    const orderInfo = {
      id: Number(request.body.id),
      customer: request.body.customer,
      mealId: Number(request.body.mealId),
      quantity: request.body.quantity,
      amount: Number(request.body.amount),
      date: request.body.date,
      time: request.body.time,

    };
    orders.push(orderInfo);
    response.status(201).json({
      orders,
    });
  }

  updateOrder(request, response) {
    const orders = db.orders;
    const orderId = Number(request.params.orderId);

    orders.filter((order)=>{

       if(order.id !== orderId){
        // response.json({message:'not found'});
           return false
       }

        order.customer = request.body.customer || order.customer;
        order.mealId= Number(request.body.mealId) || order.mealId;
        order.quantity = request.body.quantity ||  order.quantity;
        order.amount= Number(request.body.amount) ||  order.amount;
        order.date = request.body.date || order.date;
        order.time = request.body.mealId || order.time

        response.json({orders});
        return true
       

    });

  }


}

const orders = new Order();

export default orders;
