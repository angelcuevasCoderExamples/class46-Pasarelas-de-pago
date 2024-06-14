
const Stripe = require('stripe');
const { stripe } = require('../config/config');

class PaymentService  {

    constructor(){
        this.stripe = new Stripe(stripe.privateKey);
    }

    async createPaymentIntent(paymentInfo){
        const paymentIntent = this.stripe.paymentIntents.create(paymentInfo);
        return paymentIntent;
    }
}


module.exports = PaymentService; 