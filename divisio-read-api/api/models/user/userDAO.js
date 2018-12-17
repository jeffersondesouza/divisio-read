const User = require('./user');

const findById = (id) => {
    return User
        .findById(id)
        .exec();
};

module.exports = {
    findById,
};