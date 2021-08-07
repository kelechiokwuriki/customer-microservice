module.exports = (app) => {
    const placeOrderController = require('../controllers/placeorder.controller.js');
    
    // place an order
    app.post('/place-order', placeOrderController.placeOrder);
}