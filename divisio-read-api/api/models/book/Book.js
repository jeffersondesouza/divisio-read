const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, require: true },
    author: { type: String, require: true },
    status: { type: String, require: true },
    pages: { type: String, default: 0 },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Book', bookSchema);