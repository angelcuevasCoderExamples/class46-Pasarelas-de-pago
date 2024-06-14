const {Router} = require('express');
const PaymentsController = require('../controller/payments.controller');

const router = Router();


router.post('/payment-intents', PaymentsController.makePaymentIntent);



module.exports = {
    paymentsRouter : router
}; 