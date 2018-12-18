const mongoose = require('mongoose');

const Product = require('./Product');

const listAll = () => Product
    .find()
    .exec();

const save = (req) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: parseFloat(req.body.price),
        productImage: req.file.path
    });

    return product.save()
}

const findById = (id) => Product.findById(id).exec();

const update = (productId, req) => {

    const id = req.params.productId;
    const updateOps = {};

    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }

    return Product.update({ _id: productId }, {
        $set: updateOps
    });
}



const remove = id => {
    return Product.remove({ _id: id }).exec()
};


module.exports = {
    listAll,
    save,
    findById,
    update,
    remove
};