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


const update = (bookId, req) => {
  
  const updateOps = {
    title:req.body.title ,
    author:req.body.author,
    status:req.body.status,
    
  };
  return Book.updateOne({ _id: bookId }, {
    $set: updateOps
  });
}


const remove = id => Book.remove({ _id: id }).exec();

module.exports = {
  listAll,
  findById,
  save,
  update,
  remove
};