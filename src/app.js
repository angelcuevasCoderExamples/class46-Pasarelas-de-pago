const express = require('express');
const { port } = require('./config/config');
const cors =  require('cors');
const { paymentsRouter } = require('./routes/payments.router');


const app = express();

app.use(cors());

app.use('/api/payments', paymentsRouter)


app.listen(port, ()=>console.log('running ' + port))