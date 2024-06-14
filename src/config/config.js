const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    port: process.env.port, 
    stripe:{
        privateKey: process.env.STRIPE_PRIVATE_KEY
    }
}