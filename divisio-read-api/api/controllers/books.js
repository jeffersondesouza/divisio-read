const jwt = require('jsonwebtoken');

const BookDao = require('../models/book/BookDAO');
const UserDao = require('../models/user/userDAO');


exports.getAll = (req, res, next) => {

  const token = req.headers.authorization.split(/\s/)[1];
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  req.userData = decoded;

  UserDao.findById(decoded._id)
    .then(user => {

      if (!user) {
        return res.status(500).json({ message: 'cant find user' });
      }

      BookDao
        .listAll(decoded._id)
        .then(docs => {
          return res.status(200)
            .json({
              count: docs.length,
              books: docs
            })
        });

    })
    .catch(err => res.status(500).json({ message: 'Error whlile saving' }));
}


exports.getById = (req, res, next) => {

  const token = req.headers.authorization.split(/\s/)[1];
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  req.userData = decoded;

  UserDao.findById(decoded._id)
    .then(user => {

      if (!user) {
        return res.status(500).json({ message: 'cant find user' });
      }

      return BookDao.findById(req.params.id)
    })
    .then(docs => {
      if (docs) {
        return res.status(200)
          .json({
            book: docs
          });
      }
      return res.status(404)
        .json({
          book: docs
        });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error whlile saving' });

    });
}


exports.save = (req, res, next) => {
  const token = req.headers.authorization.split(/\s/)[1];
  const decoded = jwt.verify(token, process.env.JWT_KEY);
  req.userData = decoded;

  UserDao.findById(decoded._id)
    .then(user => {

      if (!user) {
        return res.status(500).json({ message: 'cant find user' });
      }

      return BookDao
        .save({ user: user, book: req.body })
        .then(() => res.status(200).json({ message: 'ok' }))

    })
    .catch(err => res.status(500).json({ message: 'Error whlile saving' }));

}


exports.update = (req, res, next) => {

  BookDao.update(req.body._id, req)
    .then(() => res.status(200).json({ message: 'ok' }))
    .catch(() => res.status(500).json({ message: 'Error whlile updating book', }));

}

exports.delete = (req, res, next) => {

  BookDao.remove(req.params.id)
    .then((result) => {

      return res.status(200).json({ message: 'Book deleted' })
    })
    .catch(error => {

      return res.status(500).json({ message: 'Error whlile deleting', })
    });

}

