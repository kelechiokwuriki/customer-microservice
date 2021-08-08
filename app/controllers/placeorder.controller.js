const axios = require('axios');
const { orderService } = require('../../config/config.js');

exports.placeOrder = async (req, res) => {
    // validate request
    if (!req.body.customerId || !req.body.productId || !req.body.amount) {
        return res.status(400).send({
            success: false,
            message: 'Bad request. Customer id or product id or amount missing.'
        });
    }

    try {
        const {data} = await axios.post(`${orderService.url}/order`, req.body);
        console.log(data);
        return res.status(201).send({
            success: true,
            message: 'Order placed successfully',
            data: data.data
        }); 
    } catch (e) {
        console.error('An error occured while sending order to order service. Error: ', e);
        return res.status(400).send({
            success: false,
            message: 'An error occured while placing the order.'
        });
    }
};

