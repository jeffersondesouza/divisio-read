const mongoose = require('mongoose');
const Book = require('./Book');
const jwt = require('jsonwebtoken');

const listAll = (id) => Book.find({ user: id }).exec();

const findById = (id) => Book.findById(id)
  .populate('user')
  .exec();

const save = ({ user, book }) => {
  return new Book({
    ...book,
    _id: mongoose.Types.ObjectId(),
    user: user
  })
    .save();
};


/* 
const update;
const remove; */

module.exports = {
  listAll,
  findById,
  save,
  /*   update,
    remove */
};