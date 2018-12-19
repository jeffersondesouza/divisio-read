const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');

const userRoutes = require('./api/routes/user');
/* const productsRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
 */
const bookRoutes = require('./api/routes/books');

mongoose.connect(
    `mongodb://duppoe:${process.env.MONGO_ATLAS_PASSWORD}@node-academind-tutorial-shard-00-00-giujg.mongodb.net:27017,node-academind-tutorial-shard-00-01-giujg.mongodb.net:27017,node-academind-tutorial-shard-00-02-giujg.mongodb.net:27017/test?ssl=true&replicaSet=node-academind-tutorial-shard-0&authSource=admin&retryWrites=true`,
    { useNewUrlParser: true }
);


app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads/'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/* 
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);
 */

app.use('/user', userRoutes);
app.use('/books', bookRoutes);



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