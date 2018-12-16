const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
const userRoutes = require('./api/routes/user');

mongoose.connect(
    `mongodb://duppoe:${process.env.MONGO_ATLAS_PASSWORD}@node-academind-tutorial-shard-00-00-giujg.mongodb.net:27017,node-academind-tutorial-shard-00-01-giujg.mongodb.net:27017,node-academind-tutorial-shard-00-02-giujg.mongodb.net:27017/test?ssl=true&replicaSet=node-academind-tutorial-shard-0&authSource=admin&retryWrites=true`,
);



app.use(morgan('dev'));
app.use('/uploads', express.static('uploads/'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use((req, res, next) => {

    console.log(req.headers.host);


    const whitelist = [
        'localhost:3000',
        'localhost:3001',
        'localhost:3002',
    ];
    const origin = req.headers.host;
    console.log(origin, whitelist.indexOf(origin));

/*     if (whitelist.indexOf(origin) > -1) {
        res.header('Access-Control-Allow-Origin', origin);
    } else {
        throw new Error('CORS');
    } */
    res.header('Access-Control-Allow-Origin', '*');


    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === 'OPTION') {
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, PATCH, DELETE");
        return res.status(200).json({});
    }

    next();

});


app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
app.use('/user', userRoutes);

// quando nao houver rota esse  ponto pegará o erro
app.use((req, res, next) => {
    const error = new Error('not Found');
    error.status = 404;
    next(error);
});


// já aqui pega qualquer error vindo da api, pode ser de BD, ou exceções

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });

});

module.exports = app;