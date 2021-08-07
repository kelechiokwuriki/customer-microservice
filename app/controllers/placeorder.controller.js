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

    axios.post(`${orderService.url}/order`, req.body).then(response => {
        console.log('data', response.data);
        return res.status(201).send({
            success: true,
            message: response.data
        }); 
    }).catch(error => {
        // save the url and data and run a cron to retry.
        console.error('error', error);
    })
};

